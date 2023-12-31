import styles from "./page.module.css";
import Image from "next/image";
import gta from "../../public/gta.png";
import Link from "next/link"
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <Image src={gta} alt="gta" className={styles.img} />

        <div className={styles.paragraps}>
          <p className={styles.p}>Grand Theft Auto VI</p>
          <h1 className={styles.h1}>San Andreas Mercenaries ja disponivel </h1>
          {/* <Button title={"Shop now"}/> */}
          <Link href="/categories"><button className={styles.button}>Shop now</button></Link>
        </div>
      </div>
    </main>
  );
}
