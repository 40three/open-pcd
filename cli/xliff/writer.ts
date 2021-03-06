import { promises as fs } from 'fs';
import { DOMParser, XMLSerializer } from 'xmldom';
import { XlfFile, XlfGroup, XlfUnit } from './models';

export function toDom(model: XlfFile): Document {

    const doc = new DOMParser().parseFromString('<xliff xmlns="urn:oasis:names:tc:xliff:document:2.0" version="2.0"></xliff>', 'text/xml');

    function groupToDom(group: XlfGroup): HTMLElement {
        const groupEl = doc.createElement('group');

        // attrs
        if (group.id) groupEl.setAttribute('id', group.id);

        // children
        group.units.forEach(unit => groupEl.appendChild(unitToDom(unit)));

        return groupEl;
    }

    function unitToDom(unit: XlfUnit): HTMLElement {
        const unitEl = doc.createElement('unit');

        // attrs
        if (unit.id) unitEl.setAttribute('id', unit.id);

        // children
        unit.segments.forEach(seg => {
            const segEl = doc.createElement('segment');
            const srcEl = doc.createElement('source');
            srcEl.textContent = seg.source;
            const trgEl = doc.createElement('target');
            trgEl.textContent = seg.target ?? '';

            unitEl.appendChild(segEl);
            segEl.appendChild(srcEl);
            segEl.appendChild(trgEl);
        });

        return unitEl;
    }

    // root
    if (model.srcLang) doc.documentElement.setAttribute('srcLang', model.srcLang);
    if (model.trgLang) doc.documentElement.setAttribute('trgLang', model.trgLang);

    // file
    const fileEl = doc.createElement('file');
    doc.documentElement.appendChild(fileEl);

    // file attrs
    if (model.id) fileEl.setAttribute('id', model.id);

    // children
    model.items.forEach(item => {
        fileEl.appendChild(item instanceof XlfGroup ? groupToDom(item) : unitToDom(item));
    });

    return doc;
}

export async function writeXliff(path: string, model: XlfFile): Promise<any> {
    const dom = toDom(model);
    return await fs.writeFile(path, new XMLSerializer().serializeToString(dom));
}