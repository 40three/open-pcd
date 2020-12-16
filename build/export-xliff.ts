/**
 * Create xliff files to provide data for translations
 */
import { promises as fs } from 'fs';
import { Attribute, IAttributeGroup } from 'abstractions';
import { XlfGroup, XlfSegment, XlfUnit, writeXliff, XlfFile } from './xliff';
import { g } from '../data/attributes';


async function writeAttributesXliff(path: string, targetCulture: string, groups: IAttributeGroup<Record<string, Attribute>>[]) {
    // attributes as { key: { source: a.name }}
    const attrsOfGroup = (g: IAttributeGroup<Record<string, Attribute>>): XlfUnit[] => Object.entries(g.attributes).map(([k, a]) => new XlfUnit({ id: k }, [new XlfSegment(a.name)]));

    const xlif = new XlfFile({ id: 'attributes' }, Object.values(groups).map(g => new XlfGroup({ id: g.key }, attrsOfGroup(g))));
    await writeXliff(path, xlif);
}

const outPath = 'xliff/export';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeAttributesXliff(`${outPath}/attributes.xlf`, 'de-DE', g);
})();