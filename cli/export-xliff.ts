/**
 * Create xliff files to provide data for translations
 */
import './_setup';
import { IProductSubType, IProductType, IProductTypeCategoryFlat } from 'abstractions';
import { promises as fs } from 'fs';
import { attributeSections } from '../data/attributes';
import { productTypesCategoryList } from '../data/product-type-categories';
import { pt } from '../data/product-types';
import { TranslationCultureKey } from './configuration';
import { writeXliff, XlfFile, XlfGroup, XlfSegment, XlfUnit } from './xliff';

/**
 * All attributes in one file grouped by attribute group
 */
async function writeAttributeSectionsXliff(path: string, trgLang: TranslationCultureKey, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    const xlif = new XlfFile(
        { id: 'attribute-sections', srcLang: 'en-US', trgLang },
        sections.map(g => new XlfGroup({ id: g.key }, [new XlfUnit(`${g.key}.name`, new XlfSegment(g.name)), ...(g.description ? [new XlfUnit(`${g.key}.description`, new XlfSegment(g.description))] : [])]))
    );
    await writeXliff(path, xlif);
}

/**
 * All attributes in one file grouped by attribute group
 */
async function writeAttributesXliff(path: string, trgLang: TranslationCultureKey, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    // attributes as { key: { source: a.name }}
    const attrsOfGroup = (g: IAttributeSection<Record<string, Attribute>>): XlfUnit[] => Object.entries(g.attributes).map(([k, a]) => [
        new XlfUnit(`${k}.name`, [new XlfSegment(a.name)]),
        ...(a.description ? [new XlfUnit(`${k}.description`, new XlfSegment(a.description))] : [])
    ]).flat(1);

    const xlif = new XlfFile({ id: 'attributes', srcLang: 'en-US', trgLang }, sections.map(g => new XlfGroup({ id: g.key }, attrsOfGroup(g))));
    await writeXliff(path, xlif);
}

/**
 * All product types in one file
 */
async function writeProductTypesXliff(path: string, trgLang: TranslationCultureKey, productTypes: IProductType[]): Promise<void> {
    const xlif = new XlfFile(
        { id: 'product-types', srcLang: 'en-US', trgLang },
        Object.values(productTypes).map(pt => new XlfGroup({ id: pt.key }, [
            new XlfUnit(`${pt.key}.name`, new XlfSegment(pt.name)),
            ...(pt.description ? [new XlfUnit(`${pt.key}.description`, new XlfSegment(pt.description))] : []),
            ...Object.entries(<Record<string, IProductSubType>>pt.subTypes ?? {}).map(([skey, st]) => new XlfUnit(`${pt.key}.${skey}.name`, new XlfSegment(st.name)))
        ]))
    );
    await writeXliff(path, xlif);
}

/**
 * All product types categories in one file
 */
async function writeProductTypeCategoriesXliff(path: string, trgLang: TranslationCultureKey, categories: IProductTypeCategoryFlat[]): Promise<void> {
    const xlif = new XlfFile(
        { id: 'product-type-categories', srcLang: 'en-US', trgLang },
        Object.values(categories).map(cat => new XlfGroup({ id: cat.key }, [new XlfUnit(`${cat.key}.name`, new XlfSegment(cat.name)), ...(cat.description ? [new XlfUnit(`${cat.key}.description`, new XlfSegment(cat.description))] : [])]))
    );
    await writeXliff(path, xlif);
}


const outPath = 'omega-t/source';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeAttributeSectionsXliff(`${outPath}/attribute-sections.xlf`, 'de', attributeSections);
    await writeAttributesXliff(`${outPath}/attributes.xlf`, 'de', attributeSections);
    await writeProductTypesXliff(`${outPath}/product-types.xlf`, 'de', pt);
    await writeProductTypeCategoriesXliff(`${outPath}/product-type-categories.xlf`, 'de', productTypesCategoryList);
})();