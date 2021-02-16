/**
 * Collect existing data and update collections
 */
import { Attribute, IAttributeSection } from '../abstractions';
import { promises as fs } from 'fs';
import { generatedDataBasePath, generatedIndexesBasePath } from './configuration';
import { attributeSections } from '../data/attributes';

/**
 * We want a global variable "s.sectionKey = [attr1, attr2]" that allows us to easily add
 * all attribute keys of sections to product types
 */
async function writeSectionAttributeKeysIndex(path: string, sections: IAttributeSection<Record<string, Attribute>>[]) {
    const data: Record<string, string[]> = sections
        .map(s => <const>[s.key, Object.keys(s.attributes)])
        .reduce((prev, [k, keys]) => (prev[k] = keys, prev), <Record<string, string[]>>{});
    const json = JSON.stringify(data);
    await fs.writeFile(path, `export const s = <const> ${json};`);
}

// main
(async () => {
    await fs.mkdir(generatedIndexesBasePath, { recursive: true });
    await writeSectionAttributeKeysIndex(`${generatedIndexesBasePath}/attribute-sections.ts`, attributeSections);
    await fs.writeFile(`${generatedIndexesBasePath}/index.ts`, 'export * from "./attribute-sections";');
    await fs.writeFile(`${generatedDataBasePath}/index.ts`, 'export * from "./types";\nexport * from "./indexes";');
})();