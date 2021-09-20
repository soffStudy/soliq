import React from 'react'
import { useRouter } from 'next/router'


let owners = [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 500, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 700, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '3', owner: true, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 860, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '4', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 1200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '5', owner: true, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 3200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" }
]

const Bayonnoma = () => {
    const router = useRouter()
    let fullData = [];

    owners.map(value => {
        if (value.id == router.query.id) fullData = value;
    })
    console.log(router.id);


    return (
        <div>
            <h1>Bayonnoma</h1>
            <h2 className='text-success'></h2>
            <h2>Lorem, ipsum dolor sit  elit. Fugit aspernatur voluptatibus cupiditate perspiciatis, officiis quod natus expedita soluta illo optio est explicabo magnam quam maiores nemo provident ut praesentium amet?</h2>

        </div>
    )
}

export default Bayonnoma
