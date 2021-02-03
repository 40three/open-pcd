import { AttributeKey } from 'attributes';
import { Attribute, IAttributeSection } from '../../abstractions';

/** Sections with some attrs from attrKeys section.attributes filtered by attrKeys */
export function filteredSectionsWithReferencedAttributes(allSections: IAttributeSection[], attrKeys: AttributeKey[]): IAttributeSection[] {
    const ret: IAttributeSection[] = [];
    for (const s of allSections) {
        const filteredAttrs = Object.entries(s.attributes)
            .filter(([k, a]) => attrKeys.includes(<any>k)).reduce((prev, [k, a]) => (prev[k] = a, prev), <Record<string, Attribute>>{});
        if (Object.keys(filteredAttrs).length > 0) {
            ret.push({ ...s, attributes: filteredAttrs });
        }
    }
    return ret;
}