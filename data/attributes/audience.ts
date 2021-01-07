/**
 * Text, audio and video content attributes
 */
import { BooleanAttr, NumberAttr, SetAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionAudienceAttrs = <const>{
    audienceAgeMin: NumberAttr({
        name: 'min age',
        unit: 'yr'
    }),
    audienceAgeMax: NumberAttr({
        name: 'max age',
        unit: 'yr'
    }),
    audienceGender: SetAttr({
        name: 'gender',
        description: 'Gender of primary target audience. This typically does not mean it\'s restricted to only one gender but to place it in the right category.',
        values: ['female', 'male']
    }),
    audienceAdult: BooleanAttr({
        name: 'adults only',
        description: 'Enable, if product is intended for adults only, e.g. nudity or secually suggestive content.',
    }),
    audienceType: StringAttr({
        name: 'audience type',
        description: 'Special target group, e.g. veterans, car owners, musicians, ...'
    }),
};

export const sectionAudience: IAttributeSection<typeof sectionAudienceAttrs> = {
    name: 'Audience',
    key: 'audience',
    description: 'Target audience information.',
    attributes: sectionAudienceAttrs
}
