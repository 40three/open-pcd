import { Optional } from 'utility-types';
import { IDateTimeAttribute, IFilesAttribute, IMoneyAttribute } from 'abstractions';
import { AttributeKey } from 'attributes';
import { IBooleanAttribute, INumberAttribute, INumberRangeAttribute, ISetAttribute, IStringAttribute } from './attribute-interfaces';
import { IProductType, IExampleProductType, IProductTypeCategory, IProductSubType, IProductTypeCategoryMap } from './product-type-interfaces';
import { IUnitInfo } from './unit-interfaces';

/** Creates unit info */
export const Unit = (data: IUnitInfo): IUnitInfo => data;

/** Creates boolean attribute */
export const BooleanAttr = (data: Omit<IBooleanAttribute, 'type'>): IBooleanAttribute => (<const>{ ...data, type: 'boolean' });
/** Creates date attribute */
export const DateAttr = (data: Omit<IDateTimeAttribute, 'type' | 'resolution'>): IDateTimeAttribute => (<const>{ ...data, type: 'datetime', resolution: 'date' });
/** Creates datetime attribute */
export const DateTimeAttr = (data: Optional<Omit<IDateTimeAttribute, 'type' | 'resolution'>, 'interval'>): IDateTimeAttribute => (<const>{ ...<const>{ interval: 'start'}, ...data, type: 'datetime', resolution: 'datetime' });
/** Creates file list attribute */
export const FilesAttr = (data: Omit<IFilesAttribute, 'type'>): IFilesAttribute => (<const>{ ...data, type: 'files' });
/** Creates money attribute */
export const MoneyAttr = (data: Omit<IMoneyAttribute, 'type'>): IMoneyAttribute => (<const>{ ...data, type: 'money' });
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
export const ExamplePType = (data: IExampleProductType): IExampleProductType => data;
/** Creates product type category */
export const PTCat = (data: Omit<IProductTypeCategory, 'children'> | string, children: IProductTypeCategoryMap = {}): IProductTypeCategory => ({ ...(typeof data === 'string' ? { name: data } : data), children });
