const Ajv = require('ajv');
const ajv = new Ajv();

// Fetch the JSON content, pretending it was downloaded from a URL
const userSchema = require('./cached-schema.json')

// Make a little helper for validating
function validate(schema, data) {
  return ajv.validate(schema, data)
    ? true : ajv.errors;
}

// Pretend we've submitted a form
const input = {
 name: "Lucrezia Nethersole",
 email: "l.nethersole@hotmail.com",
 registered_date: "2007-01-23T23:01:32Z"
}

// Is the whole input valid?
console.log('valid', validate(userSchema, input)) // true

// Ok screw up validation...
input['email'] = 123
console.log('fail', validate(userSchema, input)) // [ { keyword: 'type', dataPath: '.email', ...
