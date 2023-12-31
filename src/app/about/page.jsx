import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

function About() {
  return (
    <main className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill={true}
          all="keyboard"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.h1}>Digital sorytaller</h1>
          <h2 className={styles.h2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </h2>
        </div>
      </div>
      <section className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who are we?</h1>
          <p className={styles.p}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolore vitae quidem eligendi nostrum ipsam! Hic sed sapiente fugit
            voluptatum id dignissimos ut! Distinctio saepe dicta deserunt dolor
            ducimus magnam consequatur est tempora ad mollitia, recusandae porro
            aliquam accusantium fugiat illo nisi excepturi delectus.
            <br />
            <br />
            Deleniti itaque eos cupiditate voluptatem quod commodi, libero
            recusandae fugit nihil quae doloribus sunt, animi omnis voluptates!
            Reprehenderit quo distinctio odit non eos, quibusdam praesentium
            temporibus cum optio hic minima eveniet in eum porro, facilis dolore
            omnis provident assumenda quidem necessitatibus tempore consequuntur
            qui. Nobis recusandae totam deserunt enim neque porro nam dolorum
            natus eveniet pariatur!
          </p>
        </div>
        <div className={styles.item}>
          <h1>what we do?</h1>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas explicabo provident fugiat cum reiciendis modi iure ex
            ducimus fugit minus esse, consectetur natus unde architecto rem
            impedit quis accusantium eaque. Amet distinctio non placeat suscipit
            eos expedita perspiciatis quasi recusandae vero animi, velit earum
            quae ipsum sunt rerum a.
            <br />
            <br />

           - Dinamic Games
           <br />
           <br />
           -Fast and Activy 
           <br />
           <br />
           - pc Games
          </p>
          {/* <button className={styles.button}>contact</button> */}
          <Button title={"Contact"} url={"/contact"}/>
        </div>
      </section>
    </main>
  );
}

export default About;
