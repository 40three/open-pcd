/**
 * Helper functions for reading translations
 */

import { ObjectFileName, TranslationCultureKey, translationsBasePath } from '../configuration';
import { promises as fs } from 'fs';

/** Read translations as dict key: transated */
export async function readTranslations(objType: ObjectFileName, culture: TranslationCultureKey): Promise<Record<string, string>> {
    const json = await fs.readFile(`${translationsBasePath}/${culture}/${objType}.json`, 'utf-8');
    return JSON.parse(json);
}

/** Write object translations */
export async function writeTranslatsion(objType: ObjectFileName, culture: TranslationCultureKey, dict: Record<string, string>): Promise<void> {
    await fs.mkdir(`${translationsBasePath}/${culture}`, { recursive: true });

    const json = JSON.stringify(dict, null, 4);
    await fs.writeFile(`${translationsBasePath}/${culture}/${objType}.json`, json);
}
