# Attributes

Attributes define data fields containing product information.

## Naming Conventions

### Attribute Keys

* Use ascii characters only
* camelCase
* Use schema.org entity name as prefix if (and only if) property is defined there
* Do NOT use schema.org entity names as prefix, if property is not defined there (esp. 'product', 'offer')
* Add specializations as suffix, e.g. "description" > "descriptionShort" or "url" > "urlMobile"
* Use namespaces for all but the most common attributes

Examples:

* product.name => schema.org property (product name)
* content.title => local namespace "content"
* electronics.audio.inputs.rcaLineStereo => nested namespace
