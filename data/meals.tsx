import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss' 
const db=sql("meals.db")

interface MealsDetails {
    slug?:string,
    title: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}

export async function getMealsData(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return db.prepare("select *FROM meals").all();
}
export function getMealDetails(slug:string){
    return db.prepare('SELECT * FROM meals WHERE slug =?').get(slug);
}

export function saveMeals(meals: MealsDetails) {
    meals.slug = slugify(meals.title, { lower: true });
    meals.instructions = xss(meals.instructions);
}