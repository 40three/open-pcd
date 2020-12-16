/**
 * Create xliff files to provide data for translations
 */
import { promises as fs } from 'fs';
import { Attribute, IAttributeGroup, IProductType } from 'abstractions';
import { XlfGroup, XlfSegment, XlfUnit, writeXliff, XlfFile } from './xliff';
import { g } from '../data/attributes';
import { pt } from '../data/product-types';

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
        Object.values(productTypes).map(pt => new XlfGroup({ id: pt.key }, [new XlfUnit('name', new XlfSegment(pt.name)), ...(pt.description ? [new XlfUnit('description', new XlfSegment(pt.description))] : [])]))
    );
    await writeXliff(path, xlif);
}

const outPath = 'xliff/export';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeAttributesXliff(`${outPath}/attributes.xlf`, 'de-DE', g);
    await writeProductTypesXliff(`${outPath}/product-types.xlf`, 'de-DE', pt);
})();