const djv = require('djv');
const env = new djv({
  errorHandler(type) {
    return `errors.push({
      type: '${type}',
      schema: '${this.schema[this.schema.length - 1]}',
      data: '${this.data[this.data.length - 1]}'
    });`;
  }
});

// Fetch the JSON content, pretending it was downloaded from a URL
const userSchema = require('./cached-schema.json')

// Use `addSchema` to add this schema with the nickname of test
env.addSchema('test', userSchema);

// Pretend we've submitted a form
input = {
 "name": "Lucrezia Nethersole",
 "email":"l.nethersole@hotmail.com",
 "registered_date": "2007-01-23T23:01:32Z"
}

// Is the whole input valid?
console.log(env.validate('test', input));

// Ok screw up validation...
input['email'] = 123
console.log(env.validate('test', input));
// format: data['email']

// Test one specific field
console.log(env.validate('test#/email', 'confused.google'));
