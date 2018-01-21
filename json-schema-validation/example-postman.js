const djv = require('djv');
const env = new djv();  // version: 'draft-04'
const jsonSchema = {
  "common": {
    "properties": {
      "type": {
        "enum": ["common"]
      }
    },
    "required": [
      "type"
    ]
  }
};

// Use `addSchema` to add this schema with the nickname of test
env.addSchema('test', jsonSchema);

console.log(env.validate('test#/common', { type: 'common' }));
// => undefined

console.log(env.validate('test#/common', { type: 'custom' }));
// => "enum: data['type']"
