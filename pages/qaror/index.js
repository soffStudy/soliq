import React from 'react'


owners: [
    { id: '1', owner: false, companyName: "MALIBU GARDEN MCHJ", soliqTuri: "QQS", davri: "Yanvar", muddat: "20.02.2021", sana: "25.02.2021", sum: 500, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '2', owner: true, companyName: "COBALT GARDEN MCHJ", soliqTuri: "QQS", davri: "Mart", muddat: "20.02.2021", sana: "25.02.2021", sum: 700, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '3', owner: true, companyName: "NEXIA GARDEN MCHJ", soliqTuri: "QQS", davri: "Noyabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 860, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '4', owner: false, companyName: "MATIZ GARDEN MCHJ", soliqTuri: "QQS", davri: "Sentabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 1200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" },

    { id: '5', owner: true, companyName: "DAMAS GARDEN MCHJ", soliqTuri: "QQS", davri: "Oktabr", muddat: "20.02.2021", sana: "25.02.2021", sum: 3200, viloyatKodi: '50', tumanKodi: "1", kechuikkanKun: "5", jarimaSumma: "25.0" }
]

const Qaror = () => {
    let fullData = [];
    const ID = localStorage.getItem("ID");
    console.log(ID);

    owners.map(value => {
        if (value.id == ID) fullData = value;
    })

    return (
        <div>
            <h1>Qaror</h1>
            <h2><span className='text-danger'>{fullData.companyName}</span> ipsum dolor sit amet consectetur adipisicing elit. Ex quas soluta, tempore id deleniti ipsum, eligendi possimus blanditiis quis officiis ad unde non ipsa architecto beatae, alias aspernatur accusamus officia.</h2>

        </div>
    )
}

export default Qaror
