const Ajv = require('ajv');
const ajv = new Ajv({ jsonPointers: true });

// Fetch the JSON content, pretending it was downloaded from a URL
const userSchema = require('./cached-schema.json')

// Make a little helper for validating
function validate(schema, data) {
  return ajv.validate(schema, data)
    ? [] : ajv.errors;
}

const input = {
 name: "Lucrezia Nethersole",
 email: "not-an-email"
}

errors == validate(userSchema, input)
if ()
