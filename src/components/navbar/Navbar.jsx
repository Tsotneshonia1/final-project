"use client"

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";


  const links = [
    {
    id: 1,
    title: "Home",
    url: "/",
    },
    {
    id: 2,
    title: "Games",
    url: "/",
  },
  {
    id: 3,
    title: "Rockstar",
    url: "/",
  },
  {
    id: 4,
    title: "News",
    url: "/",
  },
  {
    id: 5,
    title: "about",
    url: "/",
  },
  {
    id: 6,
    title: "Contact",
    url: "/",
},
{
    id: 7,
    title: "dashboard",
    url: "/",
}
  ];

 
 const Navbar = () => {
    return (
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>Gamezone</Link>
        <div className={styles.links}>
          {links.map(link=>(<Link key={link.id} href={link.url} className={styles.linki}> 
          {link.title}
          </Link>
          ))}
          
        </div>
        <button className={styles.Registration}
          onClick={() => {
            console.log("Register")
          }}>Register</button>
      </div>
    )
};


export default Navbar;
