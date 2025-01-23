const sql = require('better-sqlite3');
const db = sql('meals.db');

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
    title: "Margherita Pizza",
    slug: "margherita-pizza",
    image: "/images/pizza.jpg",
    summary: "Traditional Italian pizza with fresh basil, mozzarella, and tomatoes",
    instructions: "1. Prepare pizza dough\n2. Spread tomato sauce\n3. Add fresh mozzarella\n4. Bake at 450°F for 12-15 minutes\n5. Top with fresh basil",
    creator: "Maria Romano",
    creator_email: "maria@example.com"
  }
];

db.prepare(`
    CREATE TABLE IF NOT EXISTS meals(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        image TEXT NOT NULL,
        summary TEXT NOT NULL,
        instructions TEXT NOT NULL,
        creator TEXT NOT NULL,
        creator_email TEXT NOT NULL
    )`).run();

async function initData() {
    const stmt = db.prepare(`
        INSERT INTO meals 
        (slug, title, image, summary, instructions, creator, creator_email)
        VALUES
        (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    `);

    for (const meal of dummyMeals) {
        stmt.run(meal);
    }
}

initData().catch(error => {
    console.error('Failed to initialize database:', error);
});