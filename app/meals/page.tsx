import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/assets/components/meals/meals.grid"
import { getMealsData } from "@/data/meals"
import { Suspense } from "react"


async function MealsData(){
  const meals=await getMealsData()
  return <MealsGrid meals={meals} />
}
export default async function MealsPage(){
  
  return(
    <>
    <header className={classes.header}>
      <h1>
        Tasty meals, created <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favourite recipe & cook yourself, Enjoy!!
      </p>
      <p className={classes.cta}>
        <Link href="/meals/share">
          Share your Favourite Recipe
        </Link>
      </p>
    </header>
   <Suspense fallback={<p className={`${classes.text} ${classes.pulse}`}>Loading...</p>}>
   <MealsData/>
   </Suspense>
  </>
  )
}