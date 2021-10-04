import React from 'react'
import Menuw from '../../styleW/menuW'
import { CgPlayListCheck } from "react-icons/cg";
import { AiOutlineCalendar, AiOutlineInfoCircle } from "react-icons/ai";
import All from '../../components/all'
import Head from 'next/head'
// import Gavsga from './../../public/bgRasmImage.jpg'




const Menu = () => {

    return (
        <All>
            <Head>
                <title>Soliq.uz</title>
                <meta name="description" content="Uzbekistan silq haqida umumiy malumot" />
                <meta name="key words" content="Ozbekiston soliq idorasi, soliq turlari, soliq haqidagi hujjatlar" />
                <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
            </Head>
            <Menuw>
                <div className='container menu'>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className='m-1 d-flex justify-content-center'>
                                <div className='Inform'>
                                    <div>
                                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="rasm" className='rasmShaxs' />
                                    </div>
                                    <div className='personInf'>
                                        <p className='fs-5 fw-bold'>Soliq xisobotlarini muddatida taqdim etmaganlar</p>
                                        <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                        <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                        <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <div className='m-1 d-flex justify-content-center'>
                                <div className='Inform'>
                                    <div>
                                        <img src="https://www.w3schools.com/w3css/img_avatar3.png" alt="rasm" className='rasmShaxs' />
                                    </div>
                                    <div className='personInf'>
                                        <p className='fs-5 fw-bold'>Yangi topshiriq 2</p>
                                        <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                        <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                        <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </Menuw>
        </All>
    )
}

export default Menu
