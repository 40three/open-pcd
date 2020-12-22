/**
 * Create final output
 */
import { promises as fs } from 'fs';
import { Attribute, IAttributeSection } from '../abstractions';
import { IDistAttribute, IDistAttributeSection, MultiLanguageText } from '../abstractions/dist';
import { AttributeKey, attributeSections } from '../data/attributes';
import { ObjectFileName, translations } from './configuration';
import { getTranslation, readAllTranslations } from './translations/fn';
import { AllTranslationsDict } from './translations/types';

function multiLang(allTranslations: AllTranslationsDict, en: string | undefined, objType: ObjectFileName, key: string): MultiLanguageText | undefined {
    if (en === undefined) return undefined;
    return <MultiLanguageText>translations.reduce((prev, cur) => (prev[cur] = getTranslation(allTranslations, objType, cur, key), prev), <Partial<MultiLanguageText>>{ 'en-US': en });
}

function distAttr(allTranslations: AllTranslationsDict, attrKey: AttributeKey, attr: Attribute): IDistAttribute {
    return {
        ...attr,
        name: multiLang(allTranslations, attr.name, 'attributes', `${attrKey}.name`)!,
        description: multiLang(allTranslations, attr.description, 'attributes', `${attrKey}.description`),
    };
}

function distSection(allTranslations: AllTranslationsDict, section: IAttributeSection<Record<AttributeKey, Attribute>>): IDistAttributeSection {
    return {
        name: multiLang(allTranslations, section.name, 'attribute-sections', `${section.key}.name`)!,
        description: multiLang(allTranslations, section.name, 'attribute-sections', `${section.key}.name`),
        key: section.key,
        attributes: Object.entries(section.attributes).map(([k, a]) => distAttr(allTranslations, <any>k, a))
    };
}

async function writeSections(outPath: string, allTranslations: AllTranslationsDict, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    const distStructure = sections.map(s => distSection(allTranslations, s));
    const json = JSON.stringify(distStructure, null, 4);
    await fs.writeFile(outPath, json);
}

const distDataBaseDir = 'dist/data';

// main
(async () => {
    await fs.mkdir(distDataBaseDir, { recursive: true });
    
    const translations = await readAllTranslations();
    await writeSections(`${distDataBaseDir}/attribute-sections.json`, translations, attributeSections);
})();
