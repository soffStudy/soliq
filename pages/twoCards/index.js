import React, { useEffect } from 'react'
import Tables from '../../styleW/table'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'



const TwoCards = () => {

    // Bu yerda jadvaldan id olib kelib bayonnoma yoki qaror page ga yuborish kerak
    const router = useRouter();

    const ID = localStorage.getItem("ID");
    console.log(ID);

    useEffect(() => {
        AOS.init();
    })


    return (
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
                                <p>Bayonnoma</p>
                                <p>Davlat xizmatlaridan foydalanish</p>
                            </div>
                            <Link href="bayonnoma">
                                <div className='tugmaB'>
                                    <button className='btn btnKirish'>Go to</button>
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
                                <div className='tugmaB'>
                                    <button className='btn btnKirish'>Go to</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Tables>
    )
}

export default TwoCards
