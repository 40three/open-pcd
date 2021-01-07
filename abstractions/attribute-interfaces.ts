import { UnitKey } from '../data/units';

/**
 * Group of attributes
 * Attributes belong to one group.
 */
export interface IAttributeSection<T> {
    readonly name: string;
    readonly key: string;
    readonly description?: string;
    readonly attributes: T;
}

/** Attribute of any type */
export type Attribute = IBooleanAttribute | IDateTimeAttribute | IFilesAttribute | IMoneyAttribute | INumberAttribute | INumberRangeAttribute | IStringAttribute | ISetAttribute<string> | ISetAttribute<number>;
export type AttributeType = 'boolean' | 'datetime' | 'files' | 'money' | 'number' | 'number-range' | 'string' | 'set';

/** common attribute properties */
export interface IAttributeBase {
    readonly name: string;
    readonly description?: string;
    /** Url of document describing what this attribute is about */
    readonly definitionUrl?: string;
}

/** Single boolean value */
export interface IBooleanAttribute extends IAttributeBase {
    readonly type: 'boolean';
}

/** Single date or date with time value */
export interface IDateTimeAttribute extends IAttributeBase {
    readonly type: 'datetime';
    readonly resolution: 'date' | 'datetime';
    /** e.g. date + end = date 24:00 vs date + start = date 00:00 */
    readonly interval: 'start' | 'end';
}

/** List of files */
export interface IFilesAttribute extends IAttributeBase {
    readonly type: 'files';
}

/** Single money value */
export interface IMoneyAttribute extends IAttributeBase {
    readonly type: 'money';
    /** ISO currency code */
    readonly currency?: string;
}

/** Single number value */
export interface INumberAttribute extends IAttributeBase {
    readonly type: 'number';
    readonly unit?: UnitKey;
}

/** Numeric range value */
export interface INumberRangeAttribute extends IAttributeBase {
    readonly type: 'number-range';
    readonly unit?: UnitKey;
}

/** Single string value */
export interface IStringAttribute extends IAttributeBase {
    readonly type: 'string';
    /**
     * Allowed content 
     * 
     * url: only a single url allowed, e.g. http://heavendata.com
     * bullet-points: features separated by newline
     */
    readonly content?: 'url' | 'bullet-points';
}

/** Value from defined set of available values */
export interface ISetAttribute<TValue extends string | number> extends IAttributeBase {
    readonly type: 'set'
    readonly values: readonly TValue[];
    readonly allowCustomValues?: boolean;
}
