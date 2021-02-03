import { StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionDescriptionAttrs = <const>{
    'highlights': StringAttr({
        name: 'highlights (bullet points)',
        description: 'Product highlights, one per line.'
    }),
    'product.description': StringAttr({
        name: 'product description',
        description: 'Detailed product description.'
    }),
    'descriptionShort': StringAttr({
        name: 'product short description',
        description: 'Short description e.g. for product lists.',
    }),
    'offer.url': StringAttr({
        name: 'landingpage url',
        description: 'Link to your online shop\'s product details page.',
    }),
    'offer.mobileUrl': StringAttr({
        name: 'landingpage url (mobile)',
        description: 'Link to your online shop\'s product details page for mobile devices.',
    }),
};

export const sectionDescription: IAttributeSection<typeof sectionDescriptionAttrs> = {
    name: 'description',
    key: 'description',
    description: 'Detailed product description.',
    attributes: sectionDescriptionAttrs
};
