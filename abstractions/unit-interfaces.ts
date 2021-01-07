/** 
 * Unit of measurement description 
 */
export interface IUnitInfo {
    /** Display name (en) */
    readonly name: string;
    /** Description (en) */
    readonly description?: string;
    /** Url to reference document, e.g. wikipedia */
    readonly reference?: string;
    /** Common alternative identifiers */
    readonly alternativeKeys?: string[];
}
