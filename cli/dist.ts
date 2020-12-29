/**
 * Create final output
 */
import { promises as fs } from 'fs';
import { Attribute, IAttributeSection, IProductType, IProductTypeCategoryFlat } from '../abstractions';
import { IDistAttribute, IDistAttributeSection, IDistProductType } from '../abstractions/dist';
import { a, AttributeKey, attributeSections } from '../data/attributes';
import { productTypesCategoryList } from '../data/product-type-categories';
import { pt } from '../data/product-types';
import { generatedTypesBasePath } from './configuration';
import { multiLang, readAllTranslations } from './translations/fn';
import { AllTranslationsDict } from './translations/types';


const distAttr = (allTranslations: AllTranslationsDict, attrKey: AttributeKey, attr: Attribute): IDistAttribute => ({
    ...attr,
    key: attrKey,
    name: multiLang(allTranslations, attr.name, 'attributes', `${attrKey}.name`)!,
    description: multiLang(allTranslations, attr.description, 'attributes', `${attrKey}.description`),
});

const distSection = (allTranslations: AllTranslationsDict, section: IAttributeSection<Record<AttributeKey, Attribute>>): IDistAttributeSection => ({
    name: multiLang(allTranslations, section.name, 'attribute-sections', `${section.key}.name`)!,
    description: multiLang(allTranslations, section.name, 'attribute-sections', `${section.key}.name`),
    key: section.key,
    attributes: Object.entries(section.attributes).map(([k, a]) => distAttr(allTranslations, <any>k, a))
});

/** Write all sections with their attributes in all languages */
async function writeSections(outPath: string, allTranslations: AllTranslationsDict, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    const distStructure = sections.map(s => distSection(allTranslations, s));
    const json = JSON.stringify(distStructure, null, 4);
    await fs.writeFile(outPath, json);
}

/** Write all product types in all languages */
async function writeProductTypes(outPath: string, allTranslations: AllTranslationsDict, productTypes: IProductType[]): Promise<void> {
    const distStructure = productTypes.map(pt => <IDistProductType>({
        ...pt,
        name: multiLang(allTranslations, pt.name, 'product-types', `${pt.key}.name`),
        description: multiLang(allTranslations, pt.description, 'product-types', `${pt.key}.description`)
    }));
    const json = JSON.stringify(distStructure, null, 4);
    await fs.writeFile(outPath, json);
}

/** Write all product type categories in all lnguages */
async function writeProductTypeCategories(outPath: string, allTranslations: AllTranslationsDict, productTypeCategories: IProductTypeCategoryFlat[]): Promise<void> {
    const distStructure = productTypeCategories.map(c => ({
        ...c,
        name: multiLang(allTranslations, c.name, 'product-type-categories', `${c.key}.name`),
        description: multiLang(allTranslations, c.name, 'product-type-categories', `${c.key}.description`),
    }));
    const json = JSON.stringify(distStructure, null, 4);
    await fs.writeFile(outPath, json);
}

async function generateAttributeKeyType(outPath: string, attrs: Record<string, Attribute>): Promise<void> {
    const keys = Object.keys(attrs);
    await fs.writeFile(outPath, `export type AttributeKey = ${keys.map(k => '"' + k + '"').join('|')};`);
}

async function writeTypesIndex(outPath: string): Promise<void> {
    await fs.writeFile(outPath, 'export * from "product-types.d.ts"');
}

const distDataBaseDir = 'dist/data';
const distTypesBaseDir = 'dist/types';

// main
(async () => {
    await fs.mkdir(distDataBaseDir, { recursive: true });
    await fs.mkdir(distTypesBaseDir, { recursive: true });

    const translations = await readAllTranslations();
    // json data
    await writeSections(`${distDataBaseDir}/attribute-sections.json`, translations, attributeSections);
    await writeProductTypes(`${distDataBaseDir}/product-types.json`, translations, pt);
    await writeProductTypeCategories(`${distDataBaseDir}/product-type-categories.json`, translations, productTypesCategoryList);
    // types
    await fs.copyFile(`${generatedTypesBasePath}/product-types.ts`, `${distTypesBaseDir}/product-types.d.ts`);
    await writeTypesIndex(`${distTypesBaseDir}/index.d.ts`);
    await generateAttributeKeyType(`${distTypesBaseDir}/attributes.d.ts`, a);
})();
