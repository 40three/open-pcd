import { AttributeKey } from '../data/attributes';
import { examplesA } from '../data/attributes/_example';
import { ProductTypeCategoryKey } from '../data/generated/types';

/** Product type - extracted to allow separate interface for examples */
export interface IProductTypeBase {
    readonly name: string;
    readonly key: string;
    readonly categories: readonly ProductTypeCategoryKey[];
    readonly description?: string;
    /** URL of document describing what products of this type are */
    readonly definitionUrl?: string;
    readonly subTypes?: any;
}

/** Use sub types if products share the exact same set of attributes */
export interface IProductSubType {
    readonly name: string;
    readonly description?: string;
    readonly definitionUrl?: string;
    readonly categories?: readonly ProductTypeCategoryKey[];
    readonly addAttributeRefs?: AttributeKey[];
}

/** Product types define which attributes we need to describe a product */
export interface IProductType extends IProductTypeBase {
    readonly attributeRefs: AttributeKey[];
}

/** Testing only */
export interface IExampleProductType extends IProductTypeBase {
    readonly attributeRefs: (keyof typeof examplesA)[];
}

/** Categories allow users to browse product types */
export interface IProductTypeCategory {
    readonly name: string;
    readonly description?: string;
    readonly children?: IProductTypeCategoryMap;
}

/** Category allow users to browse product types */
export interface IProductTypeCategoryFlat {
    readonly parentKey?: string;
    readonly name: string;
    readonly description?: string;
    readonly key: string;
    readonly children?: IProductTypeCategoryMap;
}

/** categoryKey: categoryDefinition map */
export interface IProductTypeCategoryMap {
    [categoryKey: string]: IProductTypeCategory;
}