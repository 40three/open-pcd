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
export type Attribute = IBooleanAttribute | IFilesAttribute | INumberAttribute | INumberRangeAttribute | IStringAttribute | ISetAttribute<string> | ISetAttribute<number>;
export type AttributeType = 'boolean' | 'files' | 'number' | 'number-range' | 'string' | 'set';

/** common attribute properties */
export interface IAttributeBase {
    readonly name: string;
    readonly description?: string;
}

/** Single boolean value */
export interface IBooleanAttribute extends IAttributeBase {
    readonly type: 'boolean';
}

/** List of files */
export interface IFilesAttribute extends IAttributeBase {
    readonly type: 'files';
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
    /** Allowed content */
    readonly content?: 'url';
}

/** Value from defined set of available values */
export interface ISetAttribute<TValue extends string | number> extends IAttributeBase {
    readonly type: 'set'
    readonly values: readonly TValue[];
    readonly allowCustomValues?: boolean;
}
