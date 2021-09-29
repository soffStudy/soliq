import React from 'react'
import Tables from '../../styleW/table'
import { CgPlayListCheck } from "react-icons/cg";
import { AiOutlineCalendar, AiOutlineInfoCircle } from "react-icons/ai";
import All from '../../components/all'
import Head from 'next/head'





const Menu = () => {

    return (
        <All>
            <Head>
                <title>Soliq.uz</title>
                <meta name="description" content="Uzbekistan silq haqida umumiy malumot" />
                <meta name="key words" content="Ozbekiston soliq idorasi, soliq turlari, soliq haqidagi hujjatlar" />
                <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
            </Head>
            <Tables>
                <div className='container menu'>
                    {/* <div className='soliqLogo'>
                        <img src="https://play-lh.googleusercontent.com/WsnTVMB-ichRSKymTZ13f8M_Q_4XlfgofdYk3V4JsFe7J4nxYZ8J_YUZQxmWjs4zsYIf=s1200" alt="rasm" className='dfg2' />
                    </div> */}
                    {/* <h2 className='text-center'> O'zbekiston Respublikasi
                        Davlat soliq qo'mitasi</h2>
                    <h4 className='text-center mb-5'>Turli xildagi xizmatlar uchun</h4> */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='m-1'>


                                <div className='Inform'>
                                    <div>
                                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="rasm" className='rasmShaxs' />
                                    </div>
                                    <div className='personInf'>
                                        <p className='fs-5 fw-bold'>Yuridik shaxslar uchun</p>
                                        <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                        <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                        <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
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
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='m-1'>
                                <div className='Inform'>
                                    <div>
                                        <img src="https://www.pngitem.com/pimgs/m/78-786420_icono-usuario-joven-transparent-user-png-png-download.png" alt="rasm" className='rasmShaxs' />
                                    </div>
                                    <div className='personInf'>
                                        <p className='fs-5 fw-bold'>Boshqa soha uchun</p>
                                        <a href=""> <span className='fs-3 me-1'><CgPlayListCheck /></span> Kreditlar ro'yhati</a>
                                        <a href=""> <span className='fs-4 me-1'><AiOutlineCalendar /></span> To'lash vaqtlari</a>
                                        <a href=""><span className='fs-4 me-1'><AiOutlineInfoCircle /></span> Mijoz ma'lumotlari</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* O'ng taraf */}



                    </div>

                </div>
            </Tables>
        </All>
    )
}

export default Menu
