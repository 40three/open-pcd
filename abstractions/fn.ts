import { IFilesAttribute } from 'abstractions';
import { AttributeKey } from 'attributes';
import { IBooleanAttribute, INumberAttribute, INumberRangeAttribute, ISetAttribute, IStringAttribute } from './attribute-interfaces';
import { IProductType, IExampeProductType, IProductTypeCategory, IProductSubType, IProductTypeCategoryMap } from './product-type-interfaces';
import { IUnitInfo } from './unit-interfaces';

/** Creates unit info */
export const Unit = (data: IUnitInfo): IUnitInfo => data;

/** Creates boolean attribute */
export const BooleanAttr = (data: Omit<IBooleanAttribute, 'type'>): IBooleanAttribute => (<const>{ ...data, type: 'boolean' });
/** Creates file list attribute */
export const FilesAttr = (data: Omit<IFilesAttribute, 'type'>): IFilesAttribute => (<const>{ ...data, type: 'files' });
/** Creates number attribute */
export const NumberAttr = (data: Omit<INumberAttribute, 'type'>): INumberAttribute => (<const>{ ...data, type: 'number' });
/** Creates range attribute */
export const NumberRangeAttr = (data: Omit<INumberRangeAttribute, 'type'>): INumberRangeAttribute => (<const>{ ...data, type: 'number-range' });
/** Creates set attribute */
export const SetAttr = <TValue extends string | number>(data: Omit<ISetAttribute<TValue>, 'type'>): ISetAttribute<TValue> => (<const>{ ...data, type: 'set' });
/** Creates string attribute */
export const StringAttr = (data: Omit<IStringAttribute, 'type'>): IStringAttribute => (<const>{ ...data, type: 'string' });

export const AttrGroup = <TCollection extends readonly AttributeKey[]>(data: TCollection) => data;

/** Creates product type */
export const PType = (data: IProductType): IProductType => data;
/** Creates product sub type */
export const PSub = (data: IProductSubType): IProductSubType => data;

/** Creates example product type */
export const ExamplePType = (data: IExampeProductType): IExampeProductType => data;
/** Creates product type category */
export const PTCat = (data: Omit<IProductTypeCategory, 'children'> | string, children: IProductTypeCategoryMap = {}): IProductTypeCategory => ({ ...(typeof data === 'string' ? { name: data } : data), children });
