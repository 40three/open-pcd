/**
 * Create type definition files from data
 * Instead of letting the typescript compiler detect everything it seems to be 
 * easier to simply generate some interfaces.
 */
import './_setup';
import { promises as fs } from 'fs';
import { IProductTypeCategoryMap } from '../abstractions';
import { productTypeCategoryTree } from '../data/product-type-categories';
import { generatedTypesBasePath } from './configuration';
 
 
  /**
  * Take category tree and write all keys as type
  */
 async function writeProductTypeCategoryTypes(productTypeCategories: IProductTypeCategoryMap, path: string): Promise<void> {
     const allKeys = (cats?: IProductTypeCategoryMap): string[] => (typeof cats === 'undefined') ? [] : Object.entries(cats).map(([key, cat]) => [key, ...allKeys(cat.children)]).flat(1);
     const productTypeCategoryKeys = allKeys(productTypeCategories);
     const src = `export type ProductTypeCategoryKey = ${productTypeCategoryKeys.map(k => '"' + k + '"').join('\n|')};`;
 
     await fs.writeFile(path, src);
 }
 
 
 // main
 (async () => {
     await fs.mkdir(generatedTypesBasePath, { recursive: true });
     await writeProductTypeCategoryTypes(productTypeCategoryTree, `${generatedTypesBasePath}/product-type-categories.ts`);
     await fs.writeFile(`${generatedTypesBasePath}/index.ts`, 'export * from "./product-type-categories";\nexport * from "./product-types";');
 })();
 