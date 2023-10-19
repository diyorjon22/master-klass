import React from 'react'
import './hero.css'
import heroImg from '../../../../assets/images/photo_2023-08-04_03-05-55.png'
import { Bounce } from 'react-awesome-reveal';
import { Zoom } from "react-awesome-reveal";
import { useState } from 'react';
import Modal from '../modal/modal';

const Hero = () => {

    const [modal, setModal] = useState(false)

    const deleteBtn = () => {
        setModal(false)
    }

    return (
        <div className='Hero'>
            <div className='container'>
                <div className='hero-box'>
                    <Bounce>
                        <div className='text-box'>
                            <h3 >———— Shaxsiy Bilimingizni Rivojlantirish Bo'yicha Kurs</h3>
                            <h1>Online Ustoz orqali <br /> Bilimingizni 2x5 Oshiring</h1>
                            <button onClick={() => setModal(true)}>Kursga yozilish</button>
                        </div>
                    </Bounce>
                    <Zoom>
                        <div className='image-box'>
                            <img src={heroImg} alt="" />
                        </div>
                    </Zoom>
                </div>
                {modal &&
                    <Modal deleteBtn={deleteBtn}/>
                }
            </div>
        </div>
    )
}

export default Hero