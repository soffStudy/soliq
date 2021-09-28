import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Documents from '../../styleW/documents'
import jsPDF from 'jspdf'
import All from '../../components/all'


const owners = [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "феврал", kun1: "20", yil2: "2021", oy2: "mart", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "mart", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "феврал", kun1: "20", yil2: "2021", oy2: "mart", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "mart", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10" },

    { id: '3', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "феврал", kun1: "20", yil2: "2021", oy2: "mart", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "mart", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10" },

    { id: '4', owner: true, companyName: "NEXIA GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "феврал", kun1: "20", yil2: "2021", oy2: "mart", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "mart", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10" },

    { id: '5', owner: false, companyName: "EPICA GARDEN MCHJ", soliqTuri: "QQS", yil: "2021", oy: "феврал", kun1: "20", yil2: "2021", oy2: "mart", kun2: "25", kechikanKun: "5", rasmiyKun: "5", rasmiOy: "mart", sum: 500, viloyatKodi: '50', tumanKodi: "1", jarimaSumma: "25.0", moliyaviyJarima: "15", sorj: "10" }
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
                            <p className='fw-bold text-center mb-0'>
                                Солиқ тўловчи томонидан солиққа оид ҳуқуқбузарлик содир этганлик юзасидан тўпланган ҳужжатларни кўриб чиқиш
                            </p>

                            <p className='fw-bold fs-5 text-center'>
                                БАЁННОМАСИ
                            </p>

                            <div className="d-flex justify-content-between w-50 ms-5 ps-5">
                                <p>2021 йил 10 март	</p>
                                <p>Тошкент шаҳри</p>
                            </div>

                            <p className='fw-bold ms-5'>
                                Қатнашган ва имзо чекувчилар:
                            </p>
                            <p className='ms-5'>
                                Солиқ органи томонидан: Йирик солиқ тўловчилар бўйича ҳудудлараро давлат солиқ инспекцияси
                            </p>

                            <div className="d-flex justify-content-between bayonnoma2 ms-5">
                                <div>
                                    <p>Бошлиқнинг биринчи ўринбосари</p>
                                    <p>Бош юрисконсульт</p>
                                    <p>Бўлим бошлиғи</p>
                                </div>
                                <div>
                                    <p>Ф. Ахмедов</p>
                                    <p>Ҳ. Маҳбубов</p>
                                    <p>М.Чурин</p>
                                </div>
                            </div>
                            <p className="text-center fs-4 fw-bold">
                                Кун тартиби:
                            </p>

                            <p><span className={fullData.owner ? "green ms-5" : "red"}>{fullData.companyName}</span>  МЧЖ (СТИР 300215233) томонидан жорий йилнинг <span className={fullData.owner ? "green" : "red"}>{fullData.oy}</span>  ойи қўшилган қиймат солиқ ҳисоботларини белгиланган муддатларди тақдим этилмаслиги ҳолати  бўйича қисқача баён этилди.</p>

                            <p className="ms-5 fw-bold">
                                I. Жариманинг ҳисобланиши бўйича
                            </p>

                            <p>
                                <span className="ms-5 fw-bold">1.1.</span> Ўзбекистон Республикаси Солиқ кодексининг 220-моддасида солиқ ҳисоботини солиқ тўғрисидаги қонун ҳужжатларида белгиланган муддатларда тақдим этмаслик, - бу солиқ ҳисоботи асосида тўланиши лозим бўлган солиқ суммасини тўлаш кечиктирилган ҳар бир кун учун бир фоиз миқдорида, лекин кўрсатилган сумманинг ўн фоизидан ортиқ бўлмаган миқдорида жарима солинишига сабаб бўлиши белгиланган.
                            </p>

                            <p>
                                <span className="ms-5 fw-bold">1.2</span> . Жамият томонидан  <span className={fullData.owner ? "green" : "red"}>{fullData.soliqTuri}</span>  ( <span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span>  код) солиғи бўйича  <span className={fullData.owner ? "green" : "red"}>{fullData.yil}</span>  йил  <span className={fullData.owner ? "green" : "red"}>{fullData.kun1}</span>   <span className={fullData.owner ? "green" : "red"}>{fullData.oy}</span>  тақдим этилиши лозим бўлган солиқ ҳисаботи  <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span>  кунга кечиктириб, жорий йилнинг  <span className={fullData.owner ? "green" : "red"}>{fullData.kun2}</span>  <span className={fullData.owner ? "green" : "red"}>{fullData.oy2}</span>   <span className={fullData.owner ? "green" : "red"}>{fullData.sum}</span> ,0 млн сўмга тақдим этилган;
                            </p>

                            <p>
                                <span className='ms-5'>Юқоридагилардан</span> келиб чиқиб, жамият томонидан <span className={fullData.owner ? "green" : "red"}>{fullData.yil}</span>  йил 1 ойлик даври мобайнида 1 та ҳолатда ҳисоботни  <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span>  кунга кечиктириб тақдим этилганлиги боис, юқорида кўрсатилган моддага асосан <span className={fullData.owner ? "green" : "red"}>{fullData.jarimaSumma}</span> млн сўм жарима  ҳисобланган.
                            </p>

                            <p className='fw-bold'>
                                <span className='ms-5'>II.</span> Юқорида келтириб ўтилган ҳолатлар комиссия томонидан муҳокама қилиниб, қуйидагича якуний қарорга келинди:
                            </p>

                            <p>
                                <span className='fw-bold ms-5'>2.1.</span> Юқоридагилардан келиб чиқиб инспекциянинг қарори қабул қилинсин;
                            </p>

                            <p>
                                <span className='fw-bold ms-5'>2.2.</span> Қарорда Солиқ кодексининг 220-моддасига асосан жамият томонидан томонидан (<span className={fullData.owner ? "green" : "red"}>{fullData.tumanKodi}</span> код) <span className={fullData.owner ? "green" : "red"}>{fullData.soliqTuri}</span> солиғи бўйича солиқ ҳисоботини <span className={fullData.owner ? "green" : "red"}>{fullData.kechikanKun}</span> кунга кечиктириб тақдим қилганлиги сабабли унга нисбатан <span className={fullData.owner ? "green" : "red"}>{fullData.jarimaSumma}</span> млн сўм жарима ( <i>молиявий санкция</i> ) ҳисоблансин;
                            </p>

                            <p>
                                <span className='fw-bold ms-5'>2.3.</span> Жамият раҳбарига мазкур жарима ( <i>молиявий санкция</i> ) суммасини бюджетга қонун ҳужжатларида белгиланган муддатларда ўтказиб бериш юклансин.
                            </p>


                        </div>
                    </div>

                </div>



            </Documents>
        </All>
    )
}

export default Bayonnoma
