## Common (common)
Standard attributes to identify products

* stock keeping unit (sku, string)
* manufacturer part number (mpn, string)
* GTIN (gtin, string)
* product name (name, string)
* brand (brand, string)


## description (description)
Detailed product description.

* highlights (bullet points) (highlights, string)
* product description (description, string)
* product short description (descriptionShort, string)
* landingpage url (url, string)
* landingpage url (mobile) (urlMobile, string)


## dimensions & packaging (dimensionsPackaging)
* width (width, number)
* height (height, number)
* depth (depth, number)
* width (weight, number)
* items per unit (itemsPerUnit, number)
* package type (item) (packagingTypePrimary, set)
* package type (secondary) (packagingTypeSecondary, set)
* package type (transit) (packagingTypeTransit, set)


## Price & Availability (priceAvailability)
* price (price, money)
* MSRP (msrp, money)
* available from (availabilityDate, datetime)
* available until (availabilityEndDate, datetime)


## Media (media)
* images (images, files)


## fashion (fashion)
* size (fashionSize, string)
* cut (fashionCut, set)


## material (material)
* color (color, string)
* material (materialType, string)
* pattern or design (pattern, string)


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


## Audience (audience)
Target audience information.

* min age (audienceAgeMin, number)
* max age (audienceAgeMax, number)
* gender (audienceGender, set)
* adults only (audienceAdult, boolean)
* audience type (audienceType, string)


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

