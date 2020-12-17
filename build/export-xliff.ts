/**
 * Create xliff files to provide data for translations
 */
import { Attribute, IAttributeGroup, IProductType, IProductTypeCategoryFlat } from 'abstractions';
import { promises as fs } from 'fs';
import { productTypesCategoryList } from '../data/product-type-categories';
import { g } from '../data/attributes';
import { pt } from '../data/product-types';
import { writeXliff, XlfFile, XlfGroup, XlfSegment, XlfUnit } from './xliff';

/**
 * All attributes in one file grouped by attribute group
 */
async function writeAttributesXliff(path: string, targetCulture: string, groups: IAttributeGroup<Record<string, Attribute>>[]): Promise<void> {
    // attributes as { key: { source: a.name }}
    const attrsOfGroup = (g: IAttributeGroup<Record<string, Attribute>>): XlfUnit[] => Object.entries(g.attributes).map(([k, a]) => new XlfUnit({ id: k }, [new XlfSegment(a.name)]));

    const xlif = new XlfFile({ id: 'attributes' }, Object.values(groups).map(g => new XlfGroup({ id: g.key }, attrsOfGroup(g))));
    await writeXliff(path, xlif);
}

/**
 * All product types in one file
 */
async function writeProductTypesXliff(path: string, targetCulture: string, productTypes: IProductType[]): Promise<void> {
    const xlif = new XlfFile(
        { id: 'product-types' },
        Object.values(productTypes).map(pt => new XlfGroup({ id: pt.key }, [new XlfUnit(`${pt.key}.name`, new XlfSegment(pt.name)), ...(pt.description ? [new XlfUnit(`${pt.key}.description`, new XlfSegment(pt.description))] : [])]))
    );
    await writeXliff(path, xlif);
}

/**
 * All product types categories in one file
 */
async function writeProductTypeCategoriesXliff(path: string, targetCulture: string, categories: IProductTypeCategoryFlat[]): Promise<void> {
    const xlif = new XlfFile(
        { id: 'product-type-categories' },
        Object.values(categories).map(cat => new XlfGroup({ id: cat.key }, [new XlfUnit(`${cat.key}.name`, new XlfSegment(cat.name)), ...(cat.description ? [new XlfUnit(`${cat.key}.description`, new XlfSegment(cat.description))] : [])]))
    );
    await writeXliff(path, xlif);
}


const outPath = 'xliff/export';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeAttributesXliff(`${outPath}/attributes.xlf`, 'de-DE', g);
    await writeProductTypesXliff(`${outPath}/product-types.xlf`, 'de-DE', pt);
    await writeProductTypeCategoriesXliff(`${outPath}/product-type-categories.xlf`, 'de-DE', productTypesCategoryList);
})();