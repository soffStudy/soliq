import React from 'react'
import { Link } from 'react-router-dom'
import Tables from '../../styleW/table'

const Menu = () => {
    return (
        <Tables>
            <div className='container menu'>
                <div className='soliqLogo'>
                    <img src="https://play-lh.googleusercontent.com/WsnTVMB-ichRSKymTZ13f8M_Q_4XlfgofdYk3V4JsFe7J4nxYZ8J_YUZQxmWjs4zsYIf=s1200" alt="rasm" className='dfg' />
                </div>
                <h1 className='text-center'> Soliq Inspeksiyasi</h1>
                <h3 className='text-center mb-5'>Turli xildagi xizmatlar uchun</h3>
                <div className="row">
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

                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <div className='m-1'>

                            <div className='menuRight'>
                                <p>Солиқчи - тадбиркорга кўмакчи</p>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quas. Nulla doloremque blanditiis, cum quisquam accusantium veritatis enim vel. Quasi earum porro rem dolore! Ipsum eos similique soluta itaque laborum?</p>

                        </div>
                    </div>

                </div>

            </div>
        </Tables>
    )
}

export default Menu
