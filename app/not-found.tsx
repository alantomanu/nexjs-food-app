"use client"
import classes from "./page.module.css"
export default function NotFoundPage(){
    return(
        <main className={classes["not-found"]}>
        <h1>Not Found</h1>
        <p>page unavailable</p>
        </main>
    )
}