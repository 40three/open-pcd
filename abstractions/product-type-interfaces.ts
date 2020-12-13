import { AttributeKey } from '../data/attributes';
import { examplesA } from '../data/attributes/_example';
import { ProducTypeCategory } from '../data/product-types/_categories';

/** Product type - extracted to allow separate interface for examples */
export interface IProductTypeBase {
    readonly name: string;
    readonly key: string;
    readonly categories: readonly ProducTypeCategory[];
    readonly description?: string;
    readonly subTypes?: any;
}

/** Use sub types if products share the exact same set of attributes */
export interface IProductSubType {
    readonly name: string;
}

/**
 * Product types define which attributes we need to describe a product
 */
export interface IProductType extends IProductTypeBase {
    readonly attributeRefs: AttributeKey[];
}

/** Testing only */
export interface IExampeProductType extends IProductTypeBase {
    readonly attributeRefs: (keyof typeof examplesA)[];
}

/** Categories allow users to browse product types */
export interface IProductTypeCategory {
    readonly name: string;
    readonly description?: string;
    readonly children?: any;
}