'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Redeco from "./redeco/page"
import Login from "./login/page"

export default function Home() {
  return (
    <div className="Home">
      
        <h1>Bievenido a Info 100</h1>
        <h2>Inicia tu registro o inicia sesión</h2>
        {/* <Login></Login> */}
        {/* <Redeco></Redeco> */}
    </div>
  );
}
