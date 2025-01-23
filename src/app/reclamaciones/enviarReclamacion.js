"use client"; 

import React,{useEffect } from "react";
import { useRouter } from 'next/navigation';

const Enviar = () =>{
    const token = localStorage.getItem('token');
    const router = useRouter();
    if(!token)
        router.push(`/`);
    return(
        <>
        <h2>Enviar Reclamación</h2>
        </>
    );
}

export default Enviar;