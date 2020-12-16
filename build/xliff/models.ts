import { type } from 'os';

export interface IUnitProperties {
    id: string;
}
export class XlfFile {
    public readonly id: string;
    constructor(
        properties: any,
        public readonly items: (XlfGroup | XlfUnit)[]
    ) {
        this.id = properties.id;
    }
}
export class XlfGroup {
    public readonly id: string;
    constructor(
        properties: IUnitProperties,
        public readonly units: XlfUnit[],
    ) {
        if (!Array.isArray(units)) throw new Error('Xlif group.units must be an array')
        this.id = properties.id;
    }
}
export class XlfUnit {
    public readonly id: string;
    public readonly segments: XlfSegment[];
    constructor(
        properties: string | { id: string; },
        segments: XlfSegment[] | XlfSegment
    ) {
        if (typeof properties === 'string') properties = { id: properties };
        this.id = properties.id;

        if (segments instanceof XlfSegment) segments = [segments];
        if (!segments.length) throw new Error('Units must have one or more segments');
        this.segments = segments;
    }
}
export class XlfSegment {
    constructor(
        public readonly source: string,
        public readonly target?: string) { }
}