const sql = require('better-sqlite3');
const db = sql('meals.db');

// Drop existing table if it exists and recreate
db.prepare(`
  DROP TABLE IF EXISTS meals
`).run();

db.prepare(`
  CREATE TABLE meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`).run();

const dummyMeals = [
  {
    title: "Classic Hamburger",
    slug: "classic-hamburger",
    image: "/images/burger.jpg",
    summary: "A juicy beef patty with fresh vegetables and our special sauce",
    instructions: "1. Form beef into patties\n2. Season with salt and pepper\n3. Grill for 4-5 minutes each side\n4. Add cheese if desired\n5. Serve on toasted buns with lettuce, tomato, and sauce",
    creator: "John Smith",
    creator_email: "john@example.com"
  },
  {
    title: "Indian Chicken Curry",
    slug: "indian-chicken-curry",
    image: "/images/curry.jpg",
    summary: "Rich and aromatic Indian curry with tender chicken pieces in a spiced gravy",
    instructions: "1. Sauté onions, ginger, and garlic\n2. Add curry spices and toast\n3. Add chicken and brown\n4. Simmer with tomatoes and coconut milk\n5. Serve with naan bread and rice",
    creator: "Priya Sharma",
    creator_email: "priya@example.com"
  },
  {
    title: "Asian Dumplings",
    slug: "asian-dumplings",
    image: "/images/dumplings.jpg",
    summary: "Handmade dumplings filled with seasoned meat and vegetables",
    instructions: "1. Prepare dumpling filling\n2. Fold dumplings with wrappers\n3. Heat pan with oil\n4. Pan-fry until golden\n5. Steam until fully cooked",
    creator: "Liu Wei",
    creator_email: "liu@example.com"
  },
  {
    title: "Creamy Mac and Cheese",
    slug: "mac-and-cheese",
    image: "/images/macncheese.jpg",
    summary: "Classic comfort food with perfectly cooked macaroni in a rich cheese sauce",
    instructions: "1. Cook macaroni until al dente\n2. Prepare cheese sauce with butter and flour\n3. Add multiple cheeses and stir until smooth\n4. Combine with macaroni\n5. Top with breadcrumbs and bake until golden",
    creator: "Emily Johnson",
    creator_email: "emily@example.com"
  },
  {
    title: "Neapolitan Pizza",
    slug: "neapolitan-pizza",
    image: "/images/pizza.jpg",
    summary: "Traditional Italian pizza with San Marzano tomatoes and fresh mozzarella",
    instructions: "1. Prepare pizza dough\n2. Spread tomato sauce\n3. Add fresh mozzarella\n4. Bake in wood-fired oven at high heat\n5. Garnish with fresh basil",
    creator: "Marco Rossi",
    creator_email: "marco@example.com"
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary: "Classic Austrian breaded veal cutlet served with lemon and parsley",
    instructions: "1. Pound veal until thin\n2. Coat in flour, egg, and breadcrumbs\n3. Heat oil in pan\n4. Fry until golden brown\n5. Serve with lemon wedges and potato salad",
    creator: "Hans Weber",
    creator_email: "hans@example.com"
  },
  {
    title: "Fresh Tomato Salad",
    slug: "tomato-salad",
    image: "/images/tomato-salad.jpg",
    summary: "Light and refreshing salad with ripe tomatoes, herbs, and vinaigrette",
    instructions: "1. Slice fresh tomatoes\n2. Add chopped herbs\n3. Season with salt and pepper\n4. Drizzle with olive oil and vinegar\n5. Toss gently and serve",
    creator: "Sofia Martinez",
    creator_email: "sofia@example.com"
  },
  
];

function initData() {
  const stmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();