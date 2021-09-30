import React, { useEffect, useState } from 'react'
import Components from '../styleW/componentsW'
import Link from 'next/link'
import { AiOutlineUnorderedList, AiOutlineHome, AiOutlineUser, AiFillEdit } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import Fade from 'react-reveal/Fade';

const Dashboard = () => {
    // const dispatch = useDispatch();

    const [tugma, setTugma] = useState(true);
    const [kun, setKun] = useState(true);

    const fd = () => {
        setTugma(!tugma);
        console.log(tugma);
    }

    useEffect(() => {
        setKun(localStorage && localStorage.getItem("Kun"));

    }, []);

    const Kun = () => {
        setKun(!kun);
        console.log(kun);
    }



    return (
        <Components>
            <div className="container locked">

                <div className={`dashboardumumiy  ${kun == true && "dashboard" || "dashboard2"}`}>
                    <div className='d-flex justify-content-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/200px-Emblem_of_Uzbekistan.svg.png" className={`${tugma ? "gerb" : "gerb2"}`} alt="" />

                    </div>
                    <div className='d-flex justify-content-center mt-2 mb-2'>
                        <button className='btn btnDashboard fw-bold' onClick={() => fd()}>
                            <AiOutlineUnorderedList /></button>
                    </div>
                    <button className='btn btn-success' onClick={() => Kun()}>kun</button>
                    <ul>
                        <li>
                            <Fade left >
                                <Link href="/menu">
                                    <a className='d-flex'>
                                        <span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><AiOutlineHome />
                                        </span>
                                        <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                            Menu
                                        </span>
                                    </a>
                                </Link>
                            </Fade>
                        </li>

                        <li>
                            <Fade left>
                                <Link href="topshiriq">
                                    <a className='d-flex'>
                                        <span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><AiFillEdit /> </span>
                                        <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                            Topshiriq</span></a>
                                </Link>
                            </Fade>
                        </li>

                        <li>
                            <Fade left>
                                <Link href="/table">
                                    <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><AiOutlineUser /> </span>
                                        <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                            Users</span></a>
                                </Link>
                            </Fade>
                        </li>
                        <li>
                            <Fade left>
                                <Link href="twoCards">
                                    <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                        Document</span></a>
                                </Link>
                            </Fade>
                        </li>

                        <li>
                            <Fade left>
                                <Link href="bayonnoma">
                                    <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                        Bayonnoma</span></a>
                                </Link>
                            </Fade>
                        </li>

                        <li>
                            <Fade left>
                                <Link href="qaror">
                                    <a className='d-flex'><span className={`${tugma ? "p-1 d-flex align-items-center" : "d-flex justify-contenr-center p-1 ms-1"}`}><HiOutlineDocumentText /> </span>  <span className={`${tugma ? "menuWord2" : "menuWord"}`}>
                                        Qaror</span></a>
                                </Link>
                            </Fade>
                        </li>



                    </ul>
                </div>
            </div>
        </Components >
    )
}

export default Dashboard
