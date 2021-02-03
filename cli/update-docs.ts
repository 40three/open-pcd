import { promises as fs } from 'fs';
import { Attribute, IAttributeSection } from '../abstractions';
import { a, attributeSections } from '../data/attributes';

/** Write all sections with all attributes as markdown files */
async function writeSections(path: string, sections: IAttributeSection<Record<string, Attribute>>[]): Promise<void> {
    const lines: string[] = [];
    sections.forEach(s => {
        lines.push(`## ${s.name} (${s.key})`);
        if (s.description) lines.push(`${s.description}\n`);
        lines.push(...Object.entries(s.attributes).map(([key, a]) => `* [${a.name}](attributes/${key}.md) (${key}, ${a.type})`));
        lines.push('\n');
    });
    await fs.writeFile(path, lines.join('\n'));
}

/** Write details page for single attribute */
async function writeAttributeDetailsPage(path: string, attr: Attribute ): Promise<void> {
    const lines: string[] = [
        `## ${attr.name}`,
        '',
        attr.description ?? '',
        '',
        `Type: ${attr.type}`,
        ...(attr.definitionUrl ? [`Definition: ${attr.definitionUrl}`] : []),
    ];
    await fs.writeFile(path, lines.join('\n'));
}

const docsBaseDir = 'docs/generated';

// main
(async () => {
    await fs.mkdir(`${docsBaseDir}/attributes`, { recursive: true });

    // json data
    await writeSections(`${docsBaseDir}/attribute-sections.md`, attributeSections);
    await Promise.all(Object.entries(a).map(kv => writeAttributeDetailsPage(`${docsBaseDir}/attributes/${kv[0]}.md`, kv[1])));
    // await writeProductTypes(`${distDataBaseDir}/product-types.json`, translations, pt);
})();