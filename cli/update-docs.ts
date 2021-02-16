import { promises as fs } from 'fs';
import { Attribute, IAttributeSection, IProductType } from '../abstractions';
import { a, attributeSections } from '../data/attributes';
import { pt } from '../data/product-types';
import { filteredSectionsWithReferencedAttributes } from './docs/fn';
import { getTranslations, readAllTranslations } from './translations/fn';
import { AllTranslationsDict } from './translations/types';

/** Write all sections with all attributes as markdown files */
async function writeSectionsList(path: string, sections: IAttributeSection[]): Promise<void> {
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
async function writeProductTypes(path: string, productTypes: IProductType[], sections: IAttributeSection[], translations: AllTranslationsDict): Promise<void> {
    for(const pt of productTypes) {
        const lines: string[] = [
            `## ${pt.name}`,
            '',
            '### Translations',
            ...Object.entries(getTranslations(translations, 'product-types', `${pt.key}.name`)).map(([c, t]) => `* ${c}: ${t}`),
            '',
            '### Attributes & Sections',
            '',
        ];
        for(const s of filteredSectionsWithReferencedAttributes(sections, pt.attributeRefs)) {
            lines.push(
                `#### ${s.name}`,
                ...Object.entries(s.attributes).map(([k, a]) => `* [${a.name} (${k})](../attributes/${k}.md)`),
                '',
            )
        }

        await fs.writeFile(`${path}/${pt.key}.md`, lines.join('\n'));
    }
}

async function writeProductTypesList(path: string, productTypes: IProductType[]): Promise<void> {
    const lines: string[] = [];
    productTypes.forEach(pt => {
        lines.push(`## [${pt.name} (${pt.key})](./product-types/${pt.key}.md)`);
        if (pt.description) lines.push(`${pt.description}\n`);
        lines.push('\n');
    });
    await fs.writeFile(path, lines.join('\n'));

}

const docsBaseDir = 'docs/generated';

// main
(async () => {
    await fs.mkdir(`${docsBaseDir}/attributes`, { recursive: true });
    await fs.mkdir(`${docsBaseDir}/product-types`, { recursive: true });

    const translations = await readAllTranslations();

    // json data
    await writeSectionsList(`${docsBaseDir}/attribute-sections.md`, attributeSections);
    await Promise.all(Object.entries(a).map(kv => writeAttributeDetailsPage(`${docsBaseDir}/attributes/${kv[0]}.md`, kv[1])));
    await writeProductTypes(`${docsBaseDir}/product-types`, pt, attributeSections, translations);
    await writeProductTypesList(`${docsBaseDir}/product-types.md`, pt);
})();