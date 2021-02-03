import { promises as fs } from 'fs';
import { pt } from '../data/product-types';
import { Attribute, IAttributeSection, IProductType } from '../abstractions';
import { a, attributeSections } from '../data/attributes';
import { AllTranslationsDict } from './translations/types';
import { getTranslations, readAllTranslations } from './translations/fn';

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

/** Write one page for each product type */
async function writeProductTypes(path: string, productTypes: IProductType[], translations: AllTranslationsDict): Promise<void> {
    for(const pt of productTypes) {
        const lines: string[] = [
            `## ${pt.name}`,
            '',
            '### Translations',
            ...Object.entries(getTranslations(translations, 'product-types', `${pt.key}.name`)).map(([c, t]) => `* ${c}: ${t}`),
            '',
            '### Attributes',
            ...pt.attributeRefs.map(key => `* ${key}`),
        ];

        await fs.writeFile(`${path}/${pt.key}.md`, lines.join('\n'));
    }
}

const docsBaseDir = 'docs/generated';

// main
(async () => {
    await fs.mkdir(`${docsBaseDir}/attributes`, { recursive: true });
    await fs.mkdir(`${docsBaseDir}/product-types`, { recursive: true });

    const translations = await readAllTranslations();

    // json data
    await writeSections(`${docsBaseDir}/attribute-sections.md`, attributeSections);
    await Promise.all(Object.entries(a).map(kv => writeAttributeDetailsPage(`${docsBaseDir}/attributes/${kv[0]}.md`, kv[1])));
    await writeProductTypes(`${docsBaseDir}/product-types`, pt, translations);
})();