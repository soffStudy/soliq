import React from 'react'
import Tables from '../../styleW/table'

const Menu = () => {
    return (
        <Tables>
            <div className='container menu'>
                <div className='soliqLogo'>
                    <img src="https://play-lh.googleusercontent.com/WsnTVMB-ichRSKymTZ13f8M_Q_4XlfgofdYk3V4JsFe7J4nxYZ8J_YUZQxmWjs4zsYIf=s1200" alt="rasm" className='dfg' />
                </div>
                <h2 className='text-center'> O'zbekiston Respublikasi
                    Davlat soliq qo'mitasi</h2>
                <h4 className='text-center mb-5'>Turli xildagi xizmatlar uchun</h4>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className='m-1'>


                            <div className='Inform'>
                                <div>
                                    <img src="https://rusnetwork.net/build/images/no-photo.jpg" alt="rasm" className='rasmShaxs' />
                                </div>
                                <div className='personInf'>
                                    <p className='fs-5 fw-bold'>Yuridik shaxslar uchun</p>
                                    <a href="">Kreditlar ro'yhati</a>
                                    <a href="">To'lash vaqtlari</a>
                                    <a href="">Mijoz ma'lumotlari</a>
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
                                    <a href="">Kreditlar ro'yhati</a>
                                    <a href="">To'lash vaqtlari</a>
                                    <a href="">Mijoz ma'lumotlari</a>
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
                                    <p>Jismoniy shaxslar uchun</p>
                                    <a href="">Ma'lumot</a>
                                    <a href="">Ma'lumot</a>
                                    <a href="">Ma'lumot</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* O'ng taraf */}



                </div>

            </div>
        </Tables>
    )
}

export default Menu
