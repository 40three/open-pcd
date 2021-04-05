import { IProductType } from './product-type-interfaces';
import { ag as attrGroups } from '../data/attribute-groups';

declare global {

    /** Global var, where PType() will add product types */
    const pt: IProductType[];
    const ag: typeof attrGroups;
};

const _global = (typeof window === 'undefined' ? global : window) as any;
_global.pt = [];
_global.ag = attrGroups;