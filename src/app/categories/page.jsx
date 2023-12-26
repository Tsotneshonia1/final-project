import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import dead from "../../../public/dead.png";
import fifa from "../../../public/fifa.png";
import Rectangle from "../../../public/Rectangle.png";
import Rectangle2 from "../../../public/Rectangle2.png";
import Rectangle3 from "../../../public/Rectangle3.png";
import Rectangle4 from "../../../public/Rectangle4.png";
import Rectangle5 from "../../../public/Rectangle5.png";
import Rectangle6 from "../../../public/Rectangle6.png";
import Rectangle7 from "../../../public/Rectangle7.png";
import Rectangle8 from "../../../public/Rectangle8.png";

const getData = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {cache: 'forse-cache'});

if(!res.ok){
      throw new Error("There is no data");
}

return res.json();

};

async function Categories() {
  const data = await getData()
  return (
    <main className={styles.mainContainer}>
        <Link href={"/categories//offer"}>
        <div className={styles.container}>
          <Image src={dead} alt="dead" className={styles.dead} />
          <Image src={fifa} alt="fifa" className={styles.fifa} />
        </div>
      </Link>
      
      <section className={styles.trendingProduct}>
        <div className={styles.centerText}>
          <h1 className={styles.h1}>SPECIAL OFFERS</h1>
        </div>
        {data.map((singleCat) => (
         <Link href={"/categories/${singleCat.id}"}>
         <div className={styles.allProducts}>
           <div className={styles.products}>
             <div className={styles.row}>
               <Image
                 src={Rectangle}
                 alt="rectangle"
                 className={styles.Regtangle}
               />
               <div className={styles.productText}>
                 <h4 className={styles.h4}></h4>
               </div>
             </div>
           </div>

           <div className={styles.row}>
             <Image
               src={Rectangle2}
               alt="rectangle"
               className={styles.Regtangle}
             />
             <div className={styles.productText}>
               <h4 className={styles.h4}>{singleCat.title}</h4>
             </div>
           </div>
         </div>
       </Link>
      ))}
    
      </section>
    </main>
  );
}

export default Categories;
