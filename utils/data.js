import bcrypt from "bcryptjs";

//product data being pulled from MongoDB, but could place here for testing
const data = {
  users: [
    {
      name: "John",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Rob",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      category: "coffee",
      image: "/images/guatemala-coffee.jpeg",
      name: "Guatemala Chimaltenango Tecpan",
      id: "Chimaltenango",
      origin: "Guatemala",
      farm: "Chimaltenango Tecpan",
      variety: "Bourbon",
      process: "Natural",
      price: "18.00",
      elevation: 1750,
      tasting_notes: "Chocolate, Candied Almond, and Cane Sugar",
      countInStock: 5,
    },
    {
      category: "coffee",
      image: "/images/ethiopia-coffee.jpeg",
      name: "Ethiopia Yirgacheffe",
      id: "Yirgacheffe",
      origin: "Ethiopia",
      farm: "Yirgacheffe",
      variety: "Heirloom",
      process: "Natural",
      price: "19.00",
      elevation: 2000,
      tasting_notes: "Blueberry, Chocolate, and Lemon",
      countInStock: 5,
    },
    {
      category: "coffee",
      image: "/images/kenya-coffee.jpeg",
      name: "Kenya Kirinyaga",
      id: "Kirinyaga",
      origin: "Kenya",
      farm: "Kirinyaga",
      variety: "SL-28",
      process: "Washed",
      price: "21.00",
      elevation: 1850,
      tasting_notes: "Pomegranate, Blackberry, and Cane Sugar",
      countInStock: 5,
    },
  ],
};

export default data;
