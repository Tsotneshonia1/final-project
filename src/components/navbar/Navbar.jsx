"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Categories",
    url: "/categories",
  },
  {
    id: 3,
    title: "Registration",
    url: "/registration",
  },

  {
    id: 4,
    title: "about",
    url: "/about",
  },
  {
    id: 6,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image
          src={"/Vector.png"}
          width={49}
          height={69}
          className={styles.vector}
        ></Image>
        <Image
          src={"/Logo.png"}
          width={69}
          height={44}
          className={styles.logo}
        ></Image>

        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.linki}>
              {link.title}
            </Link>
          ))}
        </div>
        <DarkModeToggle />

        <button
          className={styles.button}
          onClick={() => {
            console.log("Register");
          }}
        >
          Register
        </button>
        <Image
          src={"/Vector 2.png"}
          width={40}
          height={69}
          className={styles.vector2}
        ></Image>
      </div>
    </main>
  );
};

export default Navbar;
