'use client';
import { useState } from 'react';
import {BsSun, BsMoon} from 'react-icons/bs';
import style from './style.module.css';

export default function Topo() {


    const [alterarTema, setalterarTema] = useState(false)


    function trocarTemaPagina() {
        setalterarTema(!alterarTema)
      }

    return(
        <div className='container d-flex justify-content-between align-items-center flex-grow-1' >
            <div className='style-container'>
                <img src="/barbearia.png" alt="" />
            </div>
            <div>
                <button onClick={trocarTemaPagina}>
                    {alterarTema ? <BsSun/> : <BsMoon/>}
                </button>
                
            </div>
        </div>
    )
}