import { DateTimeAttr, MoneyAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionPriceAvailabilityAttrs = <const>{
    'offer.price': MoneyAttr({
        name: 'price',
    }),
    'msrp': MoneyAttr({
        name: 'MSRP',
        description: 'Recommended retail price.'
    }),
    'offer.availabilityStarts': DateTimeAttr({
        name: 'available from',
    }),
    'offer.availabilityEnds': DateTimeAttr({
        name: 'available until',
        interval: 'end',
    }),
};

export const sectionPriceAvailability: IAttributeSection<typeof sectionPriceAvailabilityAttrs> = {
    name: 'Price & Availability',
    key: 'priceAvailability',
    attributes: sectionPriceAvailabilityAttrs
};
