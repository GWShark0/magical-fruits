const FRUITS = [
  'apple',
  'banana',
  'blueberry',
  'cherry',
  'grape',
  'kiwi',
  'mango',
  'orange',
  'peach',
  'pear',
  'pineapple',
  'strawberry',
];

export { FRUITS };
export default FRUITS.reduce((result, fruit) => {
  result[fruit] = require(`./${fruit}.jpg`);
  return result;
}, {});
