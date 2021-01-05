import { DateTimeAttr, MoneyAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionPriceAvailabilityAttrs = <const>{
    'price': MoneyAttr({
        name: 'price',
    }),
    'msrp': MoneyAttr({
        name: 'MSRP',
        description: 'Recommended retail price.'
    }),
    'availabilityDate': DateTimeAttr({
        name: 'available from',
    }),
    'availabilityEndDate': DateTimeAttr({
        name: 'available until',
        interval: 'end',
    }),
};

export const sectionPriceAvailability: IAttributeSection<typeof sectionPriceAvailabilityAttrs> = {
    name: 'Price & Availability',
    key: 'priceAvailability',
    attributes: sectionPriceAvailabilityAttrs
};
