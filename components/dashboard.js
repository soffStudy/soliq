import React, { useState } from 'react'
import Components from '../styleW/componentsW'
import Link from 'next/link'
import { AiOutlineUnorderedList, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";


const Dashboard = () => {

    const [tugma, setTugma] = useState(true);

    const fd = () => {
        setTugma(!tugma);
        console.log(tugma);
    }
    return (
        <Components>
            <div className="container locked">
                <div className='dashboard'>
                    <div className='d-flex justify-content-center'>
                        <img src="https://play-lh.googleusercontent.com/WsnTVMB-ichRSKymTZ13f8M_Q_4XlfgofdYk3V4JsFe7J4nxYZ8J_YUZQxmWjs4zsYIf=s1200" className={`${tugma ? "gerb" : "gerb2"}`} alt="" />

                    </div>
                    <div className='d-flex justify-content-center mt-2 mb-2'>
                        <button className='btn btnDashboard fw-bold' onClick={() => fd()}>
                            <AiOutlineUnorderedList /></button>
                    </div>
                    <ul>
                        <li>
                            <Link href="/menu">
                                <a className='d-flex'>
                                    <span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><AiOutlineHome />
                                    </span>
                                    <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                        Menu
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/table">
                                <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><AiOutlineUser /> </span>
                                    <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                        Users</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="twoCards">
                                <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                    Document</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="bayonnoma">
                                <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                    Bayonnoma</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="qaror">
                                <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                    Qaror</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Components >
    )
}

export default Dashboard
