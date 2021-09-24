import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Documents from '../../styleW/documents'
import jsPDF from 'jspdf'


const owners = [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 500, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", davri: "Mart", muddat: "20.02.2021", sana: "25.02.2021", sum: 700, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '3', owner: true, companyName: "NEXIA GARDEN MCHJ", soliqTuri: "QQS", davri: "Noyabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 860, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '4', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", davri: "Sentabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 1200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '5', owner: true, companyName: "DAMAS GARDEN MCHJ", soliqTuri: "QQS", davri: "Oktabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 3200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" }
]

const Bayonnoma = () => {
    const router = useRouter()
    let fullData = [];

    const [state, setstate] = useState(1);

    useEffect(() => {
        setstate(localStorage && localStorage.getItem("ID"));

    }, []);



    owners.map(value => {
        if (value.id == state) fullData = value;
    })

    const pdfg = () => {
        let doc = new jsPDF("p", "pt", "a4");
        // doc.text("Hello world!", 10, <10);
        // doc.save("Soliq.pdf");

        var elem = document.getElementById("#print");
        var res = doc.autoTableHtmlToJson(elem);
        doc.autoTable(res.columns, res.data);
        doc.save("table.pdf");

    }

    const printPageFun = (divName) => {
        var printContents = document.getElementById(divName).innerHTML
        var originalContents = document.body.innerHTML
        document.body.innerHTML = printContents
        window.print()
        document.body.innerHTML = originalContents
    }


    return (
        <Documents>
            <div className="container">
                <div className='d-flex justify-content-end mt-2'>
                    <button className='btn btn-primary' onClick={() => pdfg()}>Download</button>
                    <button className='btn btn-primary' onClick={() => printPageFun('print')}>print Page</button>

                </div>
                <div className='bayonnoma mt-5' id='print'>
                    <div className='d-flex justify-content-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/200px-Emblem_of_Uzbekistan.svg.png" alt="Rasm" width="100" height='100' />
                    </div>

                    <div className='d-flex justify-content-between m-3 qaror'>
                        <div className='qaror2'>
                            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ
                                ФАРМОНИ</p>
                            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ АЙРИМ ҲУЖЖАТЛАРИГА ЎЗГАРТИШЛАР КИРИТИШ ТЎҒРИСИДА</p>
                        </div>

                        <div className='qaror2'>
                            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ
                                ФАРМОНИ</p>
                            <p>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ПРЕЗИДЕНТИНИНГ АЙРИМ ҲУЖЖАТЛАРИГА ЎЗГАРТИШЛАР КИРИТИШ ТЎҒРИСИДА</p>
                        </div>
                    </div>

                    <h3 className='text-center'>Bayonnoma</h3>

                    <div className='iform'>
                        <p> <span className={fullData.owner ? "green" : "red"}>{fullData.companyName}</span> ipsum dolor sit amet consectetur, adipisicing elit. Sunt corporis, dolores eum enim sequi ex minus vitae sint, earum pariatur molestias nisi eveniet suscipit distinctio odio doloribus deleniti a velit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, <span className={fullData.owner ? "green" : "red"}>{fullData.soliqTuri}</span> . Sunt corporis, dolores eum enim sequi ex minus vitae sint, earum pariatur molestias nisi eveniet suscipit distinctio odio doloribus deleniti a velit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt corporis, dolores eum enim sequi ex minus vitae sint, earum pariatur molestias nisi eveniet suscipit distinctio odio <span className={fullData.owner ? "green" : "red"}>{fullData.davri}</span>  a velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laborum alias consequuntur, amet cupiditate soluta natus quia laudantium libero quidem saepe assumenda dolore nam repellendus porro tempora voluptas consequatur reiciendis!</p>
                        <p>Lorem ipsum dolor sit amet <span className={fullData.owner ? "green" : "red"}>{fullData.sana}</span> , adipisicing elit. Sunt corporis, dolores eum enim sequi ex minus vitae sint, earum pariatur molestias nisi eveniet suscipit distinctio odio doloribus deleniti a velit?</p>
                        <p>КИРИТИШ ТЎҒРИСИДА
                            Ўзбекистон Республикаси Президентининг «Ўзбекистон Республикасининг Интеллектуал мулк агентлигини ташкил этиш тўғрисида» 2011 йил 24 майдаги ПҚ-1536-сонли қарорига мувофиқ:</p>
                        <p>1. Korxona nomi:  айрим ҳужжатларига иловага мувофиқ ўзгартишлар киритилсин.</p>
                        <p>2. Мазкур Фармоннинг ижросини назорат қилиш Ўзбекистон Республикаси Бош вазирининг ўринбосари А.Н. Арипов зиммасига юклансин.</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam necessitatibus doloribus molestias sapiente <span className={fullData.owner ? "green" : "red"}>{fullData.muddat}</span>aspernatur, vero illum deleniti quibusdam, numquam dolor magnam reprehenderit fugiat. Deserunt libero quo eaque corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam necessitatibus doloribus molestias sapiente <span className={fullData.owner ? "green" : "red"}>{fullData.sum}</span> $ aspernatur, vero illum deleniti quibusdam, numquam dolor magnam reprehenderit fugiat. Deserunt libero quo eaque corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam necessitatibus doloribus molestias em, ipsum dolor sit amet consectetur adipisici sapiente <span className={fullData.owner ? "green" : "red"}>{fullData.viloyatKodi}</span> $ aspernatur, vero illum deleniti quibusdam, numquam dolor magnam reprehenderit fugiat. Deserunt libero quo eaque corrupti?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, aperiam necessitatibus doloribus molestias sapiente <span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span> $ aspernatur, vero illum deleniti quibusdam, numquam dolor magnam reprehenderit fugiat. Deserunt libero quo eaque corrupti?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium ullam non ad dolore et explicabo aperiam <span className={fullData.owner ? "green" : "red"}>{fullData.kechuikkanKun}</span> iure voluptate ab accusamus laboriosam expedita libero veniam, nesciunt qui minima commodi.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium ullam non ad dolore et explicabo aperiam <span className={fullData.owner ? "green" : "red"}>{fullData.jarimaSumma}</span> iure voluptate ab accusamus laboriosam expedita libero veniam, nesciunt qui minima commodi.</p>



                        {/* <p>Soliq turi: {fullData.soliqTuri}</p>
                        <p>Kredit olingan sana: {fullData.davri}</p>
                        <p>To'lash kerak bo'lgan  sana: {fullData.muddat}</p>
                        <p>To'lov qiymati: {fullData.sum}</p>
                        <p> Viloyat kodi: {fullData.viloyatKodi}</p>
                        <p> Tuman kodi:{fullData.tumanKodi}</p>
                        <p>Kechikkan kun: {fullData.kechuikkanKun}</p>
                        <p>Jarima Summasi: {fullData.jarimaSumma}</p> */}

                    </div>
                </div>

            </div>



        </Documents>
    )
}

export default Bayonnoma
