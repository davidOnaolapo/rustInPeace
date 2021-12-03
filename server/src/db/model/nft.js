const FlatDB = require('flat-db');

const Cart = new FlatDB.Collection('cart', {
  userId:0, 
  items:[],
  active:true
});

export {
  Cart
}