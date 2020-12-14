/**
 * Create type definition files from data
 */
import { promises as fs } from 'fs';
import { IProductType } from '../abstractions';
import { a } from '../data/attributes';
import { pt } from '../data/product-types';


/**
 * Take object attrKey: IAttribute and write it to file
 */
async function writeAttributeTypes(attrs: any, path: string): Promise<void> {
    const attributeKeys = Object.keys(a);
    const src = `export type AttributeKey = ${attributeKeys.map(k => '"' + k + '"').join('\n|')};`;

    await fs.writeFile(path, src);
}

/**
 * Take object IProductType[] and write it to file
 */
async function writeProductTypeTypes(productTypes: IProductType[], path: string): Promise<void> {
    const productTypeKeys = productTypes.map(t => t.key);
    const src = `export type ProductTypeKey = ${productTypeKeys.map(k => '"' + k + '"').join('\n|')};`;

    await fs.writeFile(path, src);
}


// configuration
const outPath = 'generated/types';

// main
(async () => {
    await fs.mkdir(outPath, { recursive: true });
    await writeAttributeTypes(a, `${outPath}/attributes.d.ts`);
    await writeProductTypeTypes(pt, `${outPath}/product-types.d.ts`);
    await fs.writeFile(`${outPath}/index.ts`, 'export * from "./attributes";\nexport * from "./product-types";');
})();
