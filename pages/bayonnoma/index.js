import React from 'react'
import { useRouter } from 'next/router'


owners: [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 500, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", davri: "Mart", muddat: "20.02.2021", sana: "25.02.2021", sum: 700, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '3', owner: true, companyName: "NEXIA GARDEN MCHJ", soliqTuri: "QQS", davri: "Noyabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 860, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '4', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", davri: "Sentabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 1200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '5', owner: true, companyName: "DAMAS GARDEN MCHJ", soliqTuri: "QQS", davri: "Oktabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 3200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" }
]

const Bayonnoma = () => {
    const router = useRouter()
    let fullData = [];
    const ID = localStorage.getItem("ID");
    console.log(ID);

    owners.map(value => {
        if (value.id == ID) fullData = value;
    })

    // console.log(fullData.id + "salom");

    return (
        <div>
            <h1 className='text-center'>Bayonnoma</h1>
            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ
                ФАРМОНИ</p>
            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ АЙРИМ ҲУЖЖАТЛАРИГА ЎЗГАРТИШЛАР КИРИТИШ ТЎҒРИСИДА</p>
            <p>КИРИТИШ ТЎҒРИСИДА
                Ўзбекистон Республикаси Президентининг «Ўзбекистон Республикасининг Интеллектуал мулк агентлигини ташкил этиш тўғрисида» 2011 йил 24 майдаги ПҚ-1536-сонли қарорига мувофиқ:</p>
            <p>1. <span className='text-danger'>{fullData.companyName}</span> айрим ҳужжатларига иловага мувофиқ ўзгартишлар киритилсин.</p>
            <p>2. Мазкур Фармоннинг ижросини назорат қилиш Ўзбекистон Республикаси Бош вазирининг ўринбосари А.Н. Арипов зиммасига юклансин.</p>

            <h2 className='text-danger'>{fullData.id}</h2>
            <h2>Lorem, ipsum dolor sit  elit. Fugit aspernatur voluptatibus cupiditate perspiciatis, officiis quod natus expedita soluta illo optio est explicabo magnam quam maiores nemo provident ut praesentium amet?</h2>
        </div>
    )
}

export default Bayonnoma
