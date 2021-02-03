## Common (common)
Standard attributes to identify products

* [stock keeping unit](attributes/product.sku.md) (product.sku, string)
* [article number](attributes/articleNumber.md) (articleNumber, string)
* [manufacturer part number](attributes/product.mpn.md) (product.mpn, string)
* [GTIN](attributes/product.gtin.md) (product.gtin, string)
* [product name](attributes/product.name.md) (product.name, string)
* [brand](attributes/product.brand.md) (product.brand, string)


## description (description)
Detailed product description.

* [highlights (bullet points)](attributes/highlights.md) (highlights, string)
* [product description](attributes/product.description.md) (product.description, string)
* [product short description](attributes/descriptionShort.md) (descriptionShort, string)
* [landingpage url](attributes/offer.url.md) (offer.url, string)
* [landingpage url (mobile)](attributes/offer.mobileUrl.md) (offer.mobileUrl, string)


## dimensions & packaging (dimensionsPackaging)
* [width](attributes/width.md) (width, number)
* [height](attributes/height.md) (height, number)
* [depth](attributes/depth.md) (depth, number)
* [width](attributes/weight.md) (weight, number)
* [items per unit](attributes/itemsPerUnit.md) (itemsPerUnit, number)
* [package type (item)](attributes/packaging.typePrimary.md) (packaging.typePrimary, set)
* [package type (secondary)](attributes/packaging.typeSecondary.md) (packaging.typeSecondary, set)
* [package type (transit)](attributes/packaging.typeTransit.md) (packaging.typeTransit, set)


## Price & Availability (priceAvailability)
* [price](attributes/offer.price.md) (offer.price, money)
* [MSRP](attributes/msrp.md) (msrp, money)
* [available from](attributes/offer.availabilityStarts.md) (offer.availabilityStarts, datetime)
* [available until](attributes/offer.availabilityEnds.md) (offer.availabilityEnds, datetime)


## Media (media)
* [images](attributes/product.images.md) (product.images, files)


## fashion (fashion)
* [size](attributes/fashion.size.md) (fashion.size, string)
* [cut](attributes/fashion.cut.md) (fashion.cut, set)


## material (material)
* [color](attributes/product.color.md) (product.color, string)
* [material](attributes/material.type.md) (material.type, string)
* [pattern or design](attributes/pattern.md) (pattern, string)


## Content (content)
Text, audio and video content description.

* [title](attributes/content.title.md) (content.title, string)
* [subtitle](attributes/content.subtitle.md) (content.subtitle, string)
* [author](attributes/content.author.md) (content.author, string)
* [translators (person)](attributes/content.translators.md) (content.translators, string)
* [language](attributes/content.language.md) (content.language, set)
* [font size](attributes/content.fontSize.md) (content.fontSize, number)
* [country](attributes/content.country.md) (content.country, string)
* [genre (book)](attributes/content.genre.md) (content.genre, set)


## Audience (audience)
Target audience information.

* [min age](attributes/audience.ageMin.md) (audience.ageMin, number)
* [max age](attributes/audience.ageMax.md) (audience.ageMax, number)
* [gender](attributes/audience.gender.md) (audience.gender, set)
* [adults only](attributes/audience.adult.md) (audience.adult, boolean)
* [audience type](attributes/audience.type.md) (audience.type, string)


## Audio inputs (audioInputs)
Available input connectors for audio signals.

* [Phone inputs](attributes/electronics.audio.inputs.phono.md) (electronics.audio.inputs.phono, number)
* [RCA stereo input channels](attributes/electronics.audio.inputs.rcaLineStereo.md) (electronics.audio.inputs.rcaLineStereo, number)
* [RCA mono inputs](attributes/electronics.audio.inputs.rcaLineMono.md) (electronics.audio.inputs.rcaLineMono, number)
* [Coaxial digital audio inputs](attributes/electronics.audio.inputs.coaxialDigital.md) (electronics.audio.inputs.coaxialDigital, number)
* [Optical digital audio inputs](attributes/electronics.audio.inputs.opticalDigital.md) (electronics.audio.inputs.opticalDigital, number)
* [AES/EBU inputs](attributes/electronics.audio.inputs.aes3.md) (electronics.audio.inputs.aes3, number)
* [Supported bluetooth version](attributes/electronics.audio.inputs.bluetoothVersion.md) (electronics.audio.inputs.bluetoothVersion, string)


## Audio inputs (audioInputs)
Available input connectors for audio signals.

* [RCA stereo outputs (pairs)](attributes/electronics.audio.outputs.rcaLineStereo.md) (electronics.audio.outputs.rcaLineStereo, number)
* [RCA mono outputs](attributes/electronics.audio.outputs.rcaLineMono.md) (electronics.audio.outputs.rcaLineMono, number)
* [Coaxial digital audio outputs](attributes/electronics.audio.outputs.coaxialDigital.md) (electronics.audio.outputs.coaxialDigital, number)
* [Optical digital audio outputs](attributes/electronics.audio.outputs.opticalDigital.md) (electronics.audio.outputs.opticalDigital, number)
* [AES/EBU outputs](attributes/electronics.audio.outputs.aes3.md) (electronics.audio.outputs.aes3, number)
* [Supported bluetooth version](attributes/electronics.audio.outputs.bluetoothVersion.md) (electronics.audio.outputs.bluetoothVersion, string)


## Display (display)
Display used in TVs, Smartphones, Computers, ...

* [screen size](attributes/electronics.display.screenDiagonal.md) (electronics.display.screenDiagonal, number)
* [resolution (horizontal)](attributes/electronics.display.resolutionHorizontal.md) (electronics.display.resolutionHorizontal, number)
* [resolution (vertical)](attributes/electronics.display.resolutionVertical.md) (electronics.display.resolutionVertical, number)


## power supply & energy (powerSupplyEnergy)
* [connection voltage](attributes/electronics.powerSupplyVoltage.md) (electronics.powerSupplyVoltage, numberrange)
* [max power consumption](attributes/electronics.powerConsumptionMax.md) (electronics.powerConsumptionMax, number)
* [max power consumption](attributes/electronics.powerConsumptionStandby.md) (electronics.powerConsumptionStandby, number)
* [power source](attributes/electronics.powerSource.md) (electronics.powerSource, set)
* [batteries included](attributes/electronics.batteriesIncluded.md) (electronics.batteriesIncluded, boolean)
* [batteries required](attributes/electronics.batteriesRequired.md) (electronics.batteriesRequired, boolean)
* [battery capacity](attributes/electronics.batteryCapacity.md) (electronics.batteryCapacity, number)
* [battery technology](attributes/electronics.batteryTechnology.md) (electronics.batteryTechnology, string)
* [energy efficiency class](attributes/electronics.energyEfficiencyClass.md) (electronics.energyEfficiencyClass, set)
* [energy label min class](attributes/electronics.energyEfficiencyClassMin.md) (electronics.energyEfficiencyClassMin, set)
* [energy label max class](attributes/electronics.energyEfficiencyClassMax.md) (electronics.energyEfficiencyClassMax, set)

