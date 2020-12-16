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
        if(!Array.isArray(units)) throw new Error('Xlif group.units must be an array')
        this.id = properties.id;
    }
}
export class XlfUnit {
    public readonly id: string;
    constructor(
        properties: any,
        public readonly segments: XlfSegment[]
    ) {
        if (!segments.length) throw new Error('Units must have one or more segments');
        this.id = properties.id;
    }
}
export class XlfSegment {
    constructor(
        public readonly source: string,
        public readonly target?: string) { }
}