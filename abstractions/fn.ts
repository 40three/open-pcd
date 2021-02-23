import { Optional } from 'utility-types';
import { AttributeKey } from 'attributes';
import { IProductType, IExampleProductType, IProductTypeCategory, IProductSubType, IProductTypeCategoryMap } from './product-type-interfaces';
import { IUnitInfo } from './unit-interfaces';
import glob from 'glob';
import path from 'path';

declare global {
    /** Creates unit info */
    function Unit(data: IUnitInfo): IUnitInfo;
    /** Creates boolean attribute */
    function BooleanAttr(data: Omit<IBooleanAttribute, 'type'>): IBooleanAttribute;
    /** Creates date attribute */
    function DateAttr(data: Omit<IDateTimeAttribute, 'type' | 'resolution'>): IDateTimeAttribute;
    /** Creates datetime attribute */
    function DateTimeAttr(data: Optional<Omit<IDateTimeAttribute, 'type' | 'resolution'>, 'interval'>): IDateTimeAttribute;
    /** Creates file list attribute */
    function FilesAttr(data: Omit<IFilesAttribute, 'type'>): IFilesAttribute;
    /** Creates money attribute */
    function MoneyAttr(data: Omit<IMoneyAttribute, 'type'>): IMoneyAttribute;
    /** Creates number attribute */
    function NumberAttr(data: Omit<INumberAttribute, 'type'>): INumberAttribute;
    /** Creates range attribute */
    function NumberRangeAttr(data: Omit<INumberRangeAttribute, 'type'>): INumberRangeAttribute;
    /** Creates set attribute */
    function SetAttr<TValue extends string | number>(data: Omit<ISetAttribute<TValue>, 'type'>): ISetAttribute<TValue>;
    /** Creates string attribute */
    function StringAttr(data: Omit<IStringAttribute, 'type'>): IStringAttribute;

    function AttrGroup<TCollection extends readonly AttributeKey[]>(data: TCollection): TCollection;

    /** Creates product type */
    function PType(data: IProductType): void;
    /** Creates product sub type */
    function PSub(data: IProductSubType): IProductSubType;

    /** Creates example product type */
    function ExamplePType(data: IExampleProductType): IExampleProductType;
    /** Creates product type category */
    function PTCat(data: Omit<IProductTypeCategory, 'children'> | string, children?: IProductTypeCategoryMap): IProductTypeCategory;

    /** Read and return all product types */
    function productTypes(): Promise<IProductType[]>;
}

const _global = (typeof window === 'undefined' ? global : window) as any;

/** Creates unit info */
_global.Unit = function (data: IUnitInfo): IUnitInfo { return data; }
/** Creates boolean attribute */
_global.BooleanAttr = function (data: Omit<IBooleanAttribute, 'type'>): IBooleanAttribute { return <const>{ ...data, type: 'boolean' }; };
/** Creates date attribute */
_global.DateAttr = function (data: Omit<IDateTimeAttribute, 'type' | 'resolution'>): IDateTimeAttribute { return (<const>{ ...data, type: 'datetime', resolution: 'date' }); }
/** Creates datetime attribute */
_global.DateTimeAttr = function (data: Optional<Omit<IDateTimeAttribute, 'type' | 'resolution'>, 'interval'>): IDateTimeAttribute { return (<const>{ ...<const>{ interval: 'start' }, ...data, type: 'datetime', resolution: 'datetime' }); }
/** Creates file list attribute */
_global.FilesAttr = function (data: Omit<IFilesAttribute, 'type'>): IFilesAttribute { return (<const>{ ...data, type: 'files' }); }
/** Creates money attribute */
_global.MoneyAttr = function (data: Omit<IMoneyAttribute, 'type'>): IMoneyAttribute { return (<const>{ ...data, type: 'money' }); }
/** Creates number attribute */
_global.NumberAttr = function (data: Omit<INumberAttribute, 'type'>): INumberAttribute { return (<const>{ ...data, type: 'number' }); }
/** Creates range attribute */
_global.NumberRangeAttr = function (data: Omit<INumberRangeAttribute, 'type'>): INumberRangeAttribute { return (<const>{ ...data, type: 'numberrange' }); }
/** Creates set attribute */
_global.SetAttr = function <TValue extends string | number>(data: Omit<ISetAttribute<TValue>, 'type'>): ISetAttribute<TValue> { return (<const>{ ...data, type: 'set' }); }
/** Creates string attribute */
_global.StringAttr = function (data: Omit<IStringAttribute, 'type'>): IStringAttribute { return (<const>{ ...data, type: 'string' }); }

_global.AttrGroup = function <TCollection extends readonly AttributeKey[]>(data: TCollection) { return data; }

/** Creates product type */
_global.PType = function (data: IProductType) { pt.push(data); }
/** Creates product sub type */
_global.PSub = function (data: IProductSubType): IProductSubType { return data; }

/** Creates example product type */
_global.ExamplePType = function (data: IExampleProductType): IExampleProductType { return data; }
/** Creates product type category */
_global.PTCat = function (data: Omit<IProductTypeCategory, 'children'> | string, children: IProductTypeCategoryMap = {}): IProductTypeCategory { return ({ ...(typeof data === 'string' ? { name: data } : data), children }); }

_global.productTypes = function (): IProductType[] {
    const dir = path.resolve(__dirname, '../data/product-types');
    glob.sync(`${dir}/**/*.ts`).forEach((file) => require(path.resolve(file)));
    return pt;
}