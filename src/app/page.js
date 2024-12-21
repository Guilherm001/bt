'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Topo from "@/Components/Topo";



export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        
        <Topo />
    
      </main>
    </div>
  );
}
