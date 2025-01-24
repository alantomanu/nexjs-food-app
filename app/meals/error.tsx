"use client"
import classes from "./page.module.css"
export default function ErrorPage(){
    return(
        <main className={classes.error}>
        <h1>Error</h1>
        <p>Meals data is currently unavailable</p>
        </main>
    )
}