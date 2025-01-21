import Link from "next/link"
import logo from "@/assets/logo.png"
import classes from './header.module.css'
import Image from "next/image"
import HeaderBaground from "./header.baground"
export default function MainHeader(){
    return( 
    <>
    <HeaderBaground/>
   <header className={classes.header}>
        <Link href="/" className={classes.logo}>
        <Image src={logo} alt="A plate of food" priority></Image>
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link href="/meals">Browse meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
)}