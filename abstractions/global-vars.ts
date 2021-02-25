import { IProductType } from './product-type-interfaces';

declare global {

    /** Global var, where PType() will add product types */
    const pt: IProductType[];

};

const _global = (typeof window === 'undefined' ? global : window) as any;
_global.pt = [];