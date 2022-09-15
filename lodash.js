const _=require('lodash');

let item=[1,[2,[3,[4,[5]]]]]

let lo=_.flattenDeep(item);
console.log(lo)