import { ObjectFileName, TranslationCultureKey, translations } from './configuration';
import { writeTranslatsion } from './translations/fn';
import { XlfGroup, XlfUnit } from './xliff';
import { readXliff } from './xliff/reader';

/**
 * Convert xliff to { [objType.groupid.unitid]: stranslated value }
 */
async function convertXliffToJson(srcBasePath: string, objType: ObjectFileName, culture: TranslationCultureKey): Promise<void> {
    const xliff = await readXliff(`${srcBasePath}/${culture}/${objType}.xlf`);

    const dict: Record<string, string> = {};
    xliff.items.forEach(i => {
        const units = (i instanceof XlfGroup) ? i.units.map(u => <const>[u.id, u]) : [<const>[i.id, i]];
        units.forEach(([key, unit]: readonly [string, XlfUnit]) => {
            dict[key] = unit.segments.map(s => s.target).join();
        });
    });

    await writeTranslatsion(objType, culture, dict);
}

const srcBasePath = 'omega-t/target';

// main
(async () => {
    for (const culture of translations) {
        await convertXliffToJson(srcBasePath, 'attribute-sections', culture);
        await convertXliffToJson(srcBasePath, 'attributes', culture);
        await convertXliffToJson(srcBasePath, 'product-type-categories', culture);
        await convertXliffToJson(srcBasePath, 'product-types', culture);
    }
})();
