import DS from 'ember-data';
import faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string', {
    defaultValue() { return faker.commerce.productName(); }
  }),
  description: DS.attr('string', {
    defaultValue() { return faker.lorem.sentence(); }
  }),
  price: DS.attr('number', {
    defaultValue() { return faker.commerce.price(); }
  }),
  stocks: DS.attr('number', {
    defaultValue() { return faker.random.number(); }
  }),
  imageUrl: DS.attr('string', {
    defaultValue() { return faker.image.fashion(); }
  })
});
