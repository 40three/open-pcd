import { promises as fs } from 'fs';
import { DOMParser } from 'xmldom';
import { XlfFile, XlfGroup, XlfSegment, XlfUnit } from './models';

function readUnit(el: Element): XlfUnit {
    const segmentEls = el.getElementsByTagName('segment');
    const segments: XlfSegment[] = [];

    for (let i = 0; i < segmentEls.length; i++) {
        segments.push(new XlfSegment(segmentEls.item(i)!.getElementsByTagName('source').item(0)?.textContent ?? '', el.getElementsByTagName('target').item(0)?.textContent ?? undefined));
    }

    const id = el.getAttribute('id');
    if (!id) throw new Error('Unit element id attribute must not be empty');

    return new XlfUnit({ id }, segments);
}

function readGroup(el: Element): XlfGroup {
    const unitEls = el.getElementsByTagName('unit');
    const units: XlfUnit[] = [];

    for (let i = 0; i < unitEls.length; i++) {
        units.push(readUnit(unitEls.item(i)!));
    }

    const id = el.getAttribute('id');
    if (!id) throw new Error('Group element id attribute must not be empty');

    return new XlfGroup({ id }, units);
}

function readGroupOrUnit(el: Element): XlfGroup | XlfUnit {
    return el.tagName === 'unit' ? readUnit(el) : readGroup(el);
}

/**
 * Convert to dom structure to model classes
 */
export function fromDom(dom: Document): XlfFile {
    if (!dom) throw new Error('No xml document provided');

    const fileEl = dom.getElementsByTagName('file').item(0);
    if (!fileEl) throw new Error('Xliff file seems to be empty');

    const items: (XlfGroup | XlfUnit)[] = [];
    for (let i = 0; i < fileEl.childNodes.length; i++) {
        const item = fileEl.childNodes.item(i);
        if (item.nodeType === 1) {
            items.push(readGroupOrUnit(<Element>item));
        }
    }

    return new XlfFile({ id: '', srcLang: '', trgLang: '' }, items);
}

/**
 * Read xliff file and return model
 */
export async function readXliff(path: string): Promise<XlfFile> {
    const xml = await fs.readFile(path, 'utf8');
    const doc = new DOMParser().parseFromString(xml, 'text/xml');

    return fromDom(doc);
}