import React from 'react'
import Tables from '../styleW/table'
import { useRouter } from 'next/router'
import Link from 'next/link'


let owners = [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 500, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 700, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '3', owner: true, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 860, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '4', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 1200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '5', owner: true, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 3200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" }
]

const TwoCards = () => {

    // Bu yerda jadvaldan id olib kelib bayonnoma yoki qaror page ga yuborish kerak
    const router = useRouter();
    let fullData = [];

    owners.map(v => {
        if (v.id == router.query.id) fullData = v
    })

    const ID = () => {
        router.push({
        })
    }


    return (
        <Tables>
            <div className="container twCards">
                <h1 className='text-center'>Istalgan hujjat turini tanlang</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat iste hic, neque iure doloribus necessitatibus iusto ullam? Officia mollitia recusandae dolorem sed necessitatibus vitae eligendi tempora quibusdam nam assumenda. Est.</p>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center ">

                        <div className='twleft rasmlar1'>
                            <div className='sozlarB'>
                                <p>Bayonnoma</p>
                                <p>Davlat xizmatlaridan foydalanish</p>
                            </div>
                            <Link href="bayonnoma">
                                <div className='tugmaB'>
                                    <button className='btn btn-light'>Go to</button>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                        <div className='twleft rasmlar2'>
                            <div className='sozlarB'>
                                <p>Qaror</p>
                                <p>Davlat xizmatlaridan foydalanish</p>
                            </div>
                            <Link href="qaror">
                                <div className='tugmaB'>
                                    <button className='btn btn-light'>Go to</button>
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
