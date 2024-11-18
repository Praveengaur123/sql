const db =require('../util/database')
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO nodecomplete.products (title,price,description,imageurl) VALUES(?,?,?,?)',
      [this.title,this.price,this.description,this.imageUrl]  
    )
  }

  static deleteById(id) {
    return db.execute('DELETE FROM nodecomplete.products WHERE products.id=()?',[id])
   
  }

  static fetchAll() {
    return db.execute('SELECT * FROM nodecomplete.products')
  }

  static findById(id) {
    return db.execute('SELECT * FROM nodecomplete.products WHERE products.id=?',[id])
  }
};
