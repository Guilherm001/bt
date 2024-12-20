import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

//**componentes */
import Botao from './Componets/button'

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        
        <Botao />
    
      </main>
    </div>
  );
}
