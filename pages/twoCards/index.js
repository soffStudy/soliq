import React, { useEffect } from 'react'
import Tables from '../../styleW/table'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import All from '../../components/all'




const TwoCards = () => {

    // Bu yerda jadvaldan id olib kelib bayonnoma yoki qaror page ga yuborish kerak
    const router = useRouter();
    useEffect(() => {
        const ID = localStorage && localStorage.getItem("ID");

    })

    // const ID = localStorage && localStorage.getItem("ID");
    // console.log(ID); 

    useEffect(() => {
        AOS.init();
    })

    return (
        <All>
            <Tables>
                <div className="container twCards">
                    <div className='documentwords'>
                        <h1 className='text-center'>Istalgan hujjat turini tanlang</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iste hic, neque iure doloribus necessitatibus iusto ullam? Officia mollitia recusandae dolorem sed necessitatibus vitae eligendi tempora quibusdam nam assumenda. Est.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">
                            <div className='twleft rasmlar1' data-aos="fade-right">
                                <div className='sozlarB'>
                                    <p className='fs-3'>Bayonnoma</p>
                                    <p className='fs-6'>Davlat xizmatlaridan foydalanish</p>
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
                            <div className='twleft rasmlar2' data-aos="fade-left" data-aos-duration='400'>
                                <div className='sozlarB'>
                                    <p>Qaror</p>
                                    <p>Davlat xizmatlaridan foydalanish</p>
                                </div>
                                <Link href="qaror">
                                    <a>
                                        <button className='btn btnKirish'>Go to</button>
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Tables>
        </All>
    )
}

export default TwoCards
