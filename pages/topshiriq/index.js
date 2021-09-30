import React from 'react'
import All from '../../components/all'
import Link from 'next/link'
import QoshimchaTopshiriq from '../../styleW/qoshimchaTopshiriq'
import { FaPlus } from 'react-icons/fa';
import { CgPlayListCheck } from "react-icons/cg";
import { AiOutlineCalendar, AiOutlineInfoCircle } from "react-icons/ai";
import Head from 'next/head'



const Topshiriq = () => {
    return (
        <All>
            <Head>
                <title>Soliq.uz</title>
                <meta name="description" content="Uzbekistan silq haqida umumiy malumot" />
                <meta name="key words" content="Ozbekiston soliq idorasi, soliq turlari, soliq haqidagi hujjatlar" />
                <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
            </Head>
            <QoshimchaTopshiriq>
                <div className="container bgImage">
                    <div className="NewWork pt-2">
                        <Link href='topshiriqUchunInput'>
                            <button className='btn btn-primary'><FaPlus /></button>
                        </Link>
                    </div>
                    <div>
                        <div className="row ff">
                            <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                <div>
                                    <Link href='table' >
                                        <div className='m-1'>
                                            <div className='Inform'>
                                                <div>
                                                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="rasm" className='rasmShaxs' />
                                                </div>
                                                <div className='personInf'>
                                                    <p className='fs-5 fw-bold'>Jismoniy shaxslar uchun</p>
                                                    <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                                    <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                                    <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                            <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                                <div>
                                    <Link href='' >
                                        <div className='m-1'>
                                            <div className='Inform'>
                                                <div>
                                                    <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="rasm" className='rasmShaxs' />
                                                </div>
                                                <div className='personInf'>
                                                    <p className='fs-5 fw-bold'>Jismoniy shaxslar uchun</p>
                                                    <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                                    <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                                    <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </QoshimchaTopshiriq>
        </All>
    )
}

export default Topshiriq
