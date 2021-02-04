import symbols from 'log-symbols';
import { IAttributeSection, IProductType } from '../abstractions';
import { attributeSections } from '../data/attributes';
import { pt } from '../data/product-types';

const validateSections = (sections: IAttributeSection[]) => ({
    'duplicate keys': sections.length === (new Set(sections.map(s => s.key)).size),
});

const validateProductTypes = (types: IProductType[]) => ({
    'duplicate keys': types.length === (new Set(types.map(s => s.key)).size),
});

// main

console.log('Validating data...');

const results: Record<string, Record<string, boolean>> = {};
results['Sections'] = validateSections(attributeSections);
results['Product types'] = validateProductTypes(pt);

console.log('--------------------------------------------------------------------------');
for (const [entity, checks] of Object.entries(results)) {
    console.log(entity);
    for (const [name, success] of Object.entries(checks)) {
        console.log(`  ${success ? symbols.success : symbols.error} ${name}`)
    }
}

console.log('--------------------------------------------------------------------------');
const hasErrors = Object.values(results).find(checks => Object.values(checks).find(success => !success) !== undefined) !== undefined;
if(hasErrors) {
    console.log('INVALID DATA FOUND');
    process.exit(1);
}
