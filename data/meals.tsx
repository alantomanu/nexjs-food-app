import sql from 'better-sqlite3'
const db=sql("meals.db")
export async function getMealsData(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return db.prepare("select *FROM meals").all();
}
export function getMealDetails(slug:string){
    return db.prepare('SELECT * FROM meals WHERE slug =?').get(slug);
}