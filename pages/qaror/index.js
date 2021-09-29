import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Documents from '../../styleW/documents'
import jsPDF from 'jspdf'
import All from '../../components/all'


const owners = [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "Yanvar", kun1: "20", yil2: "2021", oy2: "Oktabr", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "Fevral", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10", muddati: "20.02.2021", sanasi: "19.03.2021" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "Fevral", kun1: "03", yil2: "2021", oy2: "Noyabr", kun2: "30", kechikanKun: "14", rasmiyKun: "5", rasmiOy: "Avgust", sum: 1400, viloyatKodi: '60', tumanKodi: "2", jarimaSumma: "38.0", moliyaviyJarima: "15", sorj: "10", muddati: "15.04.2021", sanasi: "20.03.2021" },

    { id: '3', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "Mart", kun1: "27", yil2: "2021", oy2: "Iyun", kun2: "24", kechikanKun: "7", rasmiyKun: "5", rasmiOy: "Mart", sum: 4500, viloyatKodi: '20', tumanKodi: "3", jarimaSumma: "98.0", moliyaviyJarima: "15", sorj: "10", muddati: "30.03.2021", sanasi: "13.03.2021" },

    { id: '4', owner: true, companyName: "NEXIA GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "Aprel", kun1: "14", yil2: "2021", oy2: "Iyul", kun2: "05", kechikanKun: "9", rasmiyKun: "5", rasmiOy: "Dekabr", sum: 1900, viloyatKodi: '30', tumanKodi: "4", jarimaSumma: "65.0", moliyaviyJarima: "15", sorj: "10", muddati: "28.08.2021", sanasi: "06.03.2021" },

    { id: '5', owner: false, companyName: "EPICA GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "Mart", kun1: "18", yil2: "2021", oy2: "Dekabr", kun2: "19", kechikanKun: "12", rasmiyKun: "5", rasmiOy: "Iyul", sum: 2100, viloyatKodi: '80', tumanKodi: "5", jarimaSumma: "45.0", moliyaviyJarima: "15", sorj: "10", muddati: "08.11.2021", sanasi: "0.7.05.2021" }
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


    const printPageFun = (divName) => {
        var printContents = document.getElementById(divName).innerHTML
        var originalContents = document.body.innerHTML
        document.body.innerHTML = printContents
        window.print()
        document.body.innerHTML = originalContents
    }


    return (
        <All>
            <Documents>
                <div className="container">
                    <div className='d-flex justify-content-end mt-2'>

                        <button className='btn btn-primary' onClick={() => printPageFun('print')}>Download</button>

                    </div>
                    <div className='bayonnoma mt-5' id='print'>
                        <div className='d-flex justify-content-center'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/200px-Emblem_of_Uzbekistan.svg.png" alt="Rasm" width="50" height='50' />
                        </div>


                        <div className='iform'>

                            <p className='fw-bold text-center mb-0'>Солиқ тўловчини солиққа оид ҳуқуқбузарлик содир этганлик учун жавобгарликка тортиш бўйича</p>
                            <p className='fw-bold fs-5 text-center'>
                                Қ А Р О Р И № ___
                            </p>

                            <p>
                                <span className='ms-5'>Йирик</span> солиқ тўловчилар бўйича ҳудудлараро давлат солиқ инспекцияси <span className={fullData.owner ? "green" : "red"}>{fullData.companyName}</span> томонидан  <span className={fullData.owner ? "green" : "red"}>{fullData.soliqTuri}</span>  (<span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span>  код) солиғи бўйича <span className={fullData.owner ? "green" : "red"}>{fullData.yil}</span>  йил <span className={fullData.owner ? "green" : "red"}>{fullData.kun1}</span>  <span className={fullData.owner ? "green" : "red"}>{fullData.oy}</span> да тақдим этилиши лозим бўлган солиқ ҳисоботини <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span> кунга кечиктириб, жорий йилнинг <span className={fullData.owner ? "green" : "red"}>{fullData.kun2}</span> <span className={fullData.owner ? "green" : "red"}>{fullData.oy2}</span>да <span className={fullData.owner ? "green" : "red"}>{fullData.sum}</span>,0 млн сўм кўрсатган ҳолда тақдим этилганлиги юзасидан тузилган далолатнома ва  <span className={fullData.owner ? "green" : "red"}>{fullData.yil2}</span> йил <span className={fullData.owner ? "green" : "red"}>{fullData.rasmiyKun}</span> <span className={fullData.owner ? "green" : "red"}>{fullData.rasmiOy}</span> расмийлаштирилган баённомаси билан танишиб чиқиб, қуйидагилар
                            </p>

                            <p className='fw-bold fs-5 text-center'>
                                А Н И Қ Л А Н Д И:
                            </p>

                            <p className='fw-bold ms-5'>I.
                                Солиқ ҳисоботларини кечиктириб топшириш юзасидан жарима ҳисоблаш бўйича
                            </p>
                            <p className=' ms-5'>
                                Қуйидагилар аниқланган:
                            </p>
                            <p>
                                <span className='fw-bold ms-5'>1.1.</span>  Солиқ кодексининг 82, 269-моддалари талаблари бузилганлиги инобатга олиниб, жамият томонидан 1 та ҳолатда (<span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span>  код) қўшилган қиймат солиғи бўйича ҳисоботни <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span>  кунга кечиктириб тақдим этганлиги учун жами <span className={fullData.owner ? "green" : "red"}>{fullData.jarimaSumma}</span> ,0 млн. сўм жарима (молиявий санкция) ҳисоблаб чиқилди.
                            </p>

                            <p>
                                <span className='ms-5'>Ўзбекистон</span> Республикаси “Давлат солиқ ҳизмати тўғрисида”ги Қонунининг 5-моддасининг 9-бандига, Ўзбекистон Республикаси Солиқ кодексининг 220-моддаси талабларига, солиқ ҳисоботи маълумотларига, кечиктириб тақдим этилган солиқ ҳисоботи бўйича тузилган далолатнома ва кечиктириб тақдим этилган солиқ ҳисоботини кўриб чиқиш баённомасига асосан
                            </p>

                            <p className='fw-bold fs-5 text-center'>
                                Қ  А  Р  О  Р     Қ  И  Л  А  М  А  Н:
                            </p>
                            <p className='ms-5'>
                                <span className={fullData.owner ? "green" : "red"}>{fullData.companyName}</span> раҳбарига:
                            </p>

                            <p className='fw-bold ms-5'>I.
                                Солиқ ҳисоботларини кечиктириб топшириш юзасидан жарима ҳисоблаш бўйича
                            </p>
                            <p>
                                <span className='ms-5'>Солиқ </span> кодексининг 220-моддасига асосан, солиқ ҳисоботларини кечиктириб тақдим қилганлиги учун ҳамиятга нисбатан ҳисобланган жарима (молиявий санкция) тегишли ҳисоб рақамларига мустақил равишда, қарор солиқ тўловчига берилган кундан эътиборан бир ойдан ошмаган муддат ичида ўтказилиб берилсин. Жумладан;
                            </p>
                            <p>
                                <span className='ms-5 fw-bold'>1.1.</span>Жамият томонидан ( <span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span>  код) қўшилган қиймат солиғи бўйича ҳисоботни  <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span>  кунга кечиктириб тақдим этганлиги учун  <span className={fullData.owner ? "green" : "red"}>{fullData.jarimaSumma}</span> млн. сўм жарима (молиявий санкция) қўлланилсин;
                            </p>
                            <p>
                                <span className='ms-5  fw-bold'>1.2.</span> Солиқ кодексининг 100-моддаси 4-қисмига кўра, олти ой мобайнида тенг улушларда тўлаш ва 218-моддасининг 4-қисмига асосан ўн кун ичида ихтиёрий тўланганда жарима суммаси икки баравар камайтирилиши каби ҳуқуқлари тушунтирилсин.
                            </p>
                            <p>
                                <span className='ms-5  fw-bold'> 1.3.</span> Жамиятга нисбатан ҳисобланган _________________ сўм жарима (молиявий санкция) тегишли бюджет жамғармаларга ўтказилсин:
                            </p>

                            <p>
                                Х/Р: 20015868763192156875731 <span className={fullData.owner ? "green" : "red"}>{fullData.moliyaviyJarima}</span> млн сўм (Молиявий жарима-60%)
                            </p>

                            <p>
                                Х/Р: 21560042579335871369822 <span className={fullData.owner ? "green" : "red"}>{fullData.sorj}</span> млн сўм (СОРЖ жами-40%)
                            </p>
                            <div className="d-flex justify-content-between fw-bold mt-1">
                                <div className="ms-5">
                                    <p>
                                        Бошлиқнинг
                                        биринчи ўринбосари
                                    </p>
                                </div>

                                <div className="me-5">
                                    <p>
                                        Ф.Ахмедов
                                    </p>
                                </div>
                            </div>



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
        </All>
    )
}

export default Bayonnoma
