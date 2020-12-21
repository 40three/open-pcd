/**
 * Create type definition files from data
 * Instead of letting the typescript compiler detect everything it seems to be 
 * easier to simply generate some interfaces.
 */
import { promises as fs } from 'fs';
import { IProductType, IProductTypeCategoryMap } from '../abstractions';
import { productTypeCategoryTree } from '../data/product-type-categories';
import { pt } from '../data/product-types';


/**
 * Take object IProductType[] and write it to file
 */
async function writeProductTypeTypes(productTypes: IProductType[], path: string): Promise<void> {
    const productTypeKeys = productTypes.map(t => t.key);
    const src = `export type ProductTypeKey = ${productTypeKeys.map(k => '"' + k + '"').join('\n|')};`;

    await fs.writeFile(path, src);
}

/**
 * Take category tree and write all keys as type
 */
async function writeProductTypeCategoryTypes(productTypeCategories: IProductTypeCategoryMap, path: string): Promise<void> {
    const allKeys = (cats: IProductTypeCategoryMap): string[] => Object.entries(cats).map(([key, cat]) => [key, ...allKeys(cat.children)]).flat(1);
    const productTypeCategoryKeys = allKeys(productTypeCategories);
    const src = `export type ProductTypeCategoryKey = ${productTypeCategoryKeys.map(k => '"' + k + '"').join('\n|')};`;

    await fs.writeFile(path, src);
}


// configuration
const outPath = 'data/generated/types';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeProductTypeTypes(pt, `${outPath}/product-types.ts`);
    await writeProductTypeCategoryTypes(productTypeCategoryTree, `${outPath}/product-type-categories.ts`);
    await fs.writeFile(`${outPath}/index.ts`, 'export * from "./product-type-categories";\nexport * from "./product-types";');
})();
