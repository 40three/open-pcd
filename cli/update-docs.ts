import { promises as fs } from 'fs';
import { Attribute, IAttributeSection } from '../abstractions';
import { attributeSections } from '../data/attributes';

/** Write all sections with all attributes as markdown files */
async function writeSections(path: string, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    const lines: string[] = [];
    sections.forEach(s => {
        lines.push(`## ${s.name} (${s.key})`);
        if (s.description) lines.push(`${s.description}\n`);
        lines.push(...Object.entries(s.attributes).map(([key, a]) => `* ${a.name} (${key}, ${a.type})`));
        lines.push('\n');
    });
    await fs.writeFile(path, lines.join('\n'));
}

const docsBaseDir = 'docs/generated';

// main
(async () => {
    await fs.mkdir(docsBaseDir, { recursive: true });

    // json data
    await writeSections(`${docsBaseDir}/attribute-sections.md`, attributeSections);
    // await writeProductTypes(`${distDataBaseDir}/product-types.json`, translations, pt);
})();