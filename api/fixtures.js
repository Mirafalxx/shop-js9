const mongoose = require('mongoose');
const config = require('./config');
const Category = require("./models/Category");
const Product = require("./models/Product");
const User = require("./models/User");
const {nanoid} = require('nanoid');

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) { // [{name: 'users'}, {name: 'products'}]
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [cpuCategory, hddCategory] = await Category.create({
    title: 'CPUs',
    description: 'Central Processing Units'
  }, {
    title: 'HDDs',
    description: 'Hard Disk Drives'
  });

  await Product.create({
    title: 'Intel Core i7',
    price: 300,
    category: cpuCategory,
    image: 'fixtures/cpu.jpg'
  }, {
    title: 'Seagate Barracuda 3TB',
    price: 100,
    category: hddCategory,
    image: 'fixtures/hdd.jpg'
  });

  await User.create({
    email: 'user@shop',
    password: '1qaz@WSX29',
    token: nanoid(),
    role: 'user',
    displayName: 'User'
  }, {
    email: 'admin@shop',
    password: '1qaz@WSX29',
    token: nanoid(),
    role: 'admin',
    displayName: 'Admin'
  });

  await mongoose.connection.close();
};

run().catch(console.error);