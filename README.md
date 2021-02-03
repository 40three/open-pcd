# open-pcd

Open product classification and description standard.

## Why?

When working with product data, we often need complete and machine readable product information. This includes:

* Classification: "This is a TV"
* Attributes: "Screen size is 75inch", "Panel type is IPS", ...

Today system and marketplaces often use their own attribute (column) names and product type names, so there's no way to easily exchange data.

This project provides a consumer goods focused set of product types and suggested attributes. Using these types massively simplifies data exchange.

## License

It's MIT licensed. Feel free to use, contribute or extend it for private or commercial use.

## Contributing

If product types or attributes are missing, feel free to add them and create a pull request. Note, that it typically makes no sense
to just fork the project and extend it. It wouldn't simplify data exchange if you do not contribute updates.

If you add new object, please check schema.org if a definition already exists and use the same keys.

## How about existing standards?

There are some standards like schema.org, eClass or ETIM but they often focus on non consumer goods, are incomplete (and difficult to extend)
or require you to buy a license. That makes them difficult to use for many projects.

## Questions?

Write an email to info@heavendata.com or contact us via our website https://heavendata.com