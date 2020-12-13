import { IBooleanAttribute, INumberAttribute, IRangeAttribute, ISetAttribute, IStringAttribute } from './attribute-interfaces';
import { IProductType, IExampeProductType, IProductTypeCategory, IProductSubType } from './product-type-interfaces';
import { IUnitInfo } from './unit-interfaces';

/** Creates unit info */
export const Unit = (data: IUnitInfo): IUnitInfo => data;

/** Creates boolean attribute */
export const BooleanAttr = (data: Omit<IBooleanAttribute, 'type'>): IBooleanAttribute => (<const>{ ...data, type: 'boolean' });
/** Creates number attribute */
export const NumberAttr = (data: Omit<INumberAttribute, 'type'>): INumberAttribute => (<const>{ ...data, type: 'number' });
/** Creates range attribute */
export const RangeAttr = (data: Omit<IRangeAttribute, 'type'>): IRangeAttribute => (<const>{ ...data, type: 'range' });
/** Creates set attribute */
export const SetAttr = <TValue extends string | number>(data: Omit<ISetAttribute<TValue>, 'type'>): ISetAttribute<TValue> => (<const>{ ...data, type: 'set' });
/** Creates string attribute */
export const StringAttr = (data: Omit<IStringAttribute, 'type'>): IStringAttribute => (<const>{ ...data, type: 'string' });

/** Creates product type */
export const PType = (data: IProductType): IProductType => data;
/** Creates product sub type */
export const PSub = (data: IProductSubType | string): IProductSubType => typeof data === 'string' ? ({ name: data }) : data;

/** Creates example product type */
export const ExamplePType = (data: IExampeProductType): IExampeProductType => data;
/** Creates product type category */
export const PTCat = (data: IProductTypeCategory): IProductTypeCategory => data;