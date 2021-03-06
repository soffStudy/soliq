import React, { useEffect } from 'react'
import TwocardsW from '../../styleW/twoCardsw'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import All from '../../components/all'
import { HiOutlineDocumentText } from "react-icons/hi";
import Head from 'next/head'
import { AiOutlineDoubleLeft } from 'react-icons/ai';




const TwoCards = () => {

    // Bu yerda jadvaldan id olib kelib bayonnoma yoki qaror page ga yuborish kerak
    const router = useRouter();
    useEffect(() => {
        const ID = localStorage && localStorage.getItem("ID");

    })


    useEffect(() => {
        AOS.init();
    })

    return (
        <All>
            <Head>
                <title>Soliq.uz</title>
                <meta name="description" content="Uzbekistan soliq haqida umumiy malumot" />
                <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
            </Head>
            <TwocardsW>
                <div>
                    <Link href='table'>
                        <a>
                            <button className='btn btn-primary'><AiOutlineDoubleLeft /></button>
                        </a>
                    </Link>
                </div>
                <div className="container twCards">
                    <div className='documentwords'>
                        <h1 className='text-center'>Istalgan hujjat turini tanlang va yuklab oling</h1>
                        <p className='ms-5 me-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iste hic, neque iure doloribus necessitatibus iusto ullam? Officia mollitia recusandae dolorem sed necessitatibus vitae eligendi tempora quibusdam nam assumenda. Est.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">
                            <div className='twleft rasmlar1 ' data-aos="fade-right">
                                <div className='sozlarB'>
                                    <p className='fs-3'>Bayonnoma</p>
                                    <p className='fs-6'> <HiOutlineDocumentText /> Davlat xizmatlaridan foydalanish</p>
                                </div>
                                <Link href="bayonnoma">
                                    <div className="d-flex justify-content-end">
                                        <a>
                                            <button className='btn btnKirish'>Go to</button>
                                        </a>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                            <div className='twleft rasmlar1' data-aos="fade-right">
                                <div className='sozlarB'>
                                    <p className='fs-3'>Qaror</p>
                                    <p className='fs-6'> <HiOutlineDocumentText />  Davlat xizmatlaridan foydalanish</p>
                                </div>
                                <Link href="qaror">
                                    <div className="d-flex justify-content-end">
                                        <a>
                                            <button className='btn btnKirish'>Go to</button>
                                        </a>
                                    </div>
                                </Link>
                                ???      </div>
                        </div>
                    </div>
                </div>
            </TwocardsW>
        </All>
    )
}

export default TwoCards