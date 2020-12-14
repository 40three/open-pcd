/** 
 * Unit of measurement description 
 */
export interface IUnitInfo {
    /** Display name */
    readonly name: string;
    readonly description?: string;
    /** Url to reference document, e.g. wikipedia */
    readonly reference?: string;
}
