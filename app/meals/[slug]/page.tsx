import Image from 'next/image'
import classes from './page.module.css'
import { getMealDetails } from '@/data/meals'
export default function MealDetailsPage({params}:any){
    const meal :any=getMealDetails(params.slug)
    meal.instructions=meal.instructions.replace(/\n/g,'<br/>')
    return(
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt="" fill/>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={'mailto:${meal.creator_email}'}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
        </main>
        </>
    )
}