## Common (common)
Standard attributes to identify products

* stock keeping unit (product.sku, string)
* manufacturer part number (product.mpn, string)
* GTIN (product.gtin, string)
* product name (product.name, string)
* brand (product.brand, string)


## description (description)
Detailed product description.

* highlights (bullet points) (highlights, string)
* product description (product.description, string)
* product short description (descriptionShort, string)
* landingpage url (offer.url, string)
* landingpage url (mobile) (offer.mobileUrl, string)


## dimensions & packaging (dimensionsPackaging)
* width (width, number)
* height (height, number)
* depth (depth, number)
* width (weight, number)
* items per unit (itemsPerUnit, number)
* package type (item) (packaging.typePrimary, set)
* package type (secondary) (packaging.typeSecondary, set)
* package type (transit) (packaging.typeTransit, set)


## Price & Availability (priceAvailability)
* price (offer.price, money)
* MSRP (msrp, money)
* available from (offer.availabilityStarts, datetime)
* available until (offer.availabilityEnds, datetime)


## Media (media)
* images (product.images, files)


## fashion (fashion)
* size (fashion.size, string)
* cut (fashion.cut, set)


## material (material)
* color (color, string)
* material (material.type, string)
* pattern or design (pattern, string)


## Content (content)
Text, audio and video content description.

* title (content.title, string)
* subtitle (content.subtitle, string)
* author (content.author, string)
* translators (person) (content.translators, string)
* language (content.language, set)
* font size (content.fontSize, number)
* country (content.country, string)
* genre (book) (content.genre, set)


## Audience (audience)
Target audience information.

* min age (audience.ageMin, number)
* max age (audience.ageMax, number)
* gender (audience.gender, set)
* adults only (audience.adult, boolean)
* audience type (audience.type, string)


## Audio inputs (audioInputs)
Available input connectors for audio signals.

* Phone inputs (electronics.audio.inputs.phono, number)
* RCA stereo input channels (electronics.audio.inputs.rcaLineStereo, number)
* RCA mono inputs (electronics.audio.inputs.rcaLineMono, number)
* Coaxial digital audio inputs (electronics.audio.inputs.coaxialDigital, number)
* Optical digital audio inputs (electronics.audio.inputs.opticalDigital, number)
* AES/EBU inputs (electronics.audio.inputs.aes3, number)
* Supported bluetooth version (electronics.audio.inputs.bluetoothVersion, string)


## Audio inputs (audioInputs)
Available input connectors for audio signals.

* RCA stereo outputs (pairs) (electronics.audio.outputs.rcaLineStereo, number)
* RCA mono outputs (electronics.audio.outputs.rcaLineMono, number)
* Coaxial digital audio outputs (electronics.audio.outputs.coaxialDigital, number)
* Optical digital audio outputs (electronics.audio.outputs.opticalDigital, number)
* AES/EBU outputs (electronics.audio.outputs.aes3, number)
* Supported bluetooth version (electronics.audio.outputs.bluetoothVersion, string)


## Display (display)
Display used in TVs, Smartphones, Computers, ...

* screen size (electronics.display.screenDiagonal, number)
* resolution (horizontal) (electronics.display.resolutionHorizontal, number)
* resolution (vertical) (electronics.display.resolutionVertical, number)


## power supply & energy (powerSupplyEnergy)
* connection voltage (electronics.powerSupplyVoltage, numberrange)
* max power consumption (electronics.powerConsumptionMax, number)
* max power consumption (electronics.powerConsumptionStandby, number)
* power source (electronics.powerSource, set)
* batteries included (electronics.batteriesIncluded, boolean)
* batteries required (electronics.batteriesRequired, boolean)
* battery capacity (electronics.batteryCapacity, number)
* battery technology (electronics.batteryTechnology, string)
* energy efficiency class (electronics.energyEfficiencyClass, set)
* energy label min class (electronics.energyEfficiencyClassMin, set)
* energy label max class (electronics.energyEfficiencyClassMax, set)

