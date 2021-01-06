## Common (common)
Standard attributes to identify products

* stock keeping unit (sku, string)
* manufacturer part number (mpn, string)
* GTIN (gtin, string)
* product name (name, string)
* brand (brand, string)


## Content (content)
Text, audio and video content description.

* title (title, string)
* subtitle (subtitle, string)
* author (author, string)
* translators (person) (translators, string)
* language (language, set)
* font size (fontSize, number)
* country (country, string)
* genre (book) (bookGenre, set)
* adult content (adultContent, boolean)


## description (description)
Detailed product description.

* product description (description, string)
* product short description (descriptionShort, string)
* landingpage url (url, string)
* landingpage url (mobile) (urlMobile, string)


## dimensions an packaging (dimensionsPackaging)
* width (width, number)
* height (height, number)
* depth (depth, number)
* width (weight, number)
* items per unit (itemsPerUnit, number)
* package type (item) (packagingTypePrimary, set)
* package type (secondary) (packagingTypeSecondary, set)
* package type (transit) (packagingTypeTransit, set)


## Display (display)
Display used in TVs, Smartphones, Computers, ...

* screen size (screen-diagonal, number)


## Media (media)
* images (images, files)


## power supply & energy (powerSupplyEnergy)
* connection voltage (powerSupplyVoltage, number-range)
* max power consumption (powerConsumptionMax, number)
* max power consumption (powerConsumptionStandby, number)
* power source (powerSource, set)
* batteries included (batteriesIncluded, boolean)
* batteries required (batteriesRequired, boolean)
* battery capacity (batteryCapacity, number)
* energy efficiency class (energyEfficiencyClass, set)
* energy label min class (energyEfficiencyClassMin, set)
* energy label max class (energyEfficiencyClassMax, set)


## Price & Availability (priceAvailability)
* price (price, money)
* MSRP (msrp, money)
* available from (availabilityDate, datetime)
* available until (availabilityEndDate, datetime)

