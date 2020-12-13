import { UnitKey } from '../data/units';

/**
 * Group of attributes
 * Attributes belong to one group.
 */
export interface IAttributeGroup<T> {
    readonly name: string;
    readonly key: string;
    readonly description?: string;
    readonly attributes: T;
}

/** Attribute of any type */
export type Attribute = IBooleanAttribute | INumberAttribute | IRangeAttribute | IStringAttribute | ISetAttribute<string> | ISetAttribute<number>;

/** common attribute properties */
export interface IAttributeBase {
    readonly name: string;
    readonly description?: string;
}

/** Single boolean value */
export interface IBooleanAttribute extends IAttributeBase {
    readonly type: 'boolean';
}

/** Single number value */
export interface INumberAttribute extends IAttributeBase {
    readonly type: 'number';
    readonly unit?: UnitKey;
}

/** Numeric range value */
export interface IRangeAttribute extends IAttributeBase {
    readonly type: 'range';
    readonly unit?: UnitKey;
}

/** Single string value */
export interface IStringAttribute extends IAttributeBase {
    readonly type: 'string';
}

/** Value from defined set of available values */
export interface ISetAttribute<TValue extends string | number> extends IAttributeBase {
    readonly type: 'set'
    readonly values: readonly TValue[];
}
