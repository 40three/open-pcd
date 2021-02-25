
import { ag } from '../../../attribute-groups';

PType({
    name: 'Roller shutter control',
    key: 'rollershuttercontrol',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});