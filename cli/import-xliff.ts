import { promises as fs } from 'fs';
import { XlfGroup, XlfUnit } from './xliff';
import { readXliff } from './xliff/reader';

/**
 * Convert xliff to { [objType.groupid.unitid]: stranslated value }
 */
async function convertXliffToJson(xliffPath: string, jsonPath: string, objType: string, culture: string): Promise<void> {
    const xliff = await readXliff(xliffPath);

    const dict: Record<string, string> = {};
    xliff.items.forEach(i => {
        const units = (i instanceof XlfGroup) ? i.units.map(u => <const>[`${objType}.${u.id}`, u]) : [<const>[`${objType}.${i.id}`, i]];
        units.forEach(([key, unit]: readonly [string, XlfUnit]) => {
            dict[key] = unit.segments.map(s => s.target).join();
        });
    });

    const json = JSON.stringify(dict);
    await fs.writeFile(jsonPath, json);
}

const srcBasePath = 'omega-t/target';
const outBasePath = 'data/generated/translations';
const cultures = ['de'];

// main
(async () => {
    for (const culture of cultures) {
        await fs.mkdir(`${outBasePath}/${culture}`, { recursive: true });
        await convertXliffToJson(`${srcBasePath}/${culture}/attributes.xlf`, `${outBasePath}/${culture}/attributes.json`, 'attributes', culture);
        await convertXliffToJson(`${srcBasePath}/${culture}/product-type-categories.xlf`, `${outBasePath}/${culture}/product-type-categories.json`, 'product-type-categories', culture);
        await convertXliffToJson(`${srcBasePath}/${culture}/product-types.xlf`, `${outBasePath}/${culture}/product-types.json`, 'product-types', culture);
    }
})();
