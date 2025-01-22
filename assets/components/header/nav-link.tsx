"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css'
export default function NavLink(){
    const path =usePathname();
    return(
        
        <ul>
                <li>
                    <Link href="/meals" className={path.startsWith("/meals") ? classes.active:''}>Browse meals</Link>
                </li>
                <li>
                    <Link href="/community" className={path.startsWith("/community") ? classes.active:''}>Foodies Community</Link>
                </li>
            </ul>
    )
}