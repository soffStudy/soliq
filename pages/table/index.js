import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Tables from '../../styleW/table'
import { useRouter } from 'next/router'

const Table = () => {

    const owners = useSelector(state => state.owners);
    const sum = useSelector(state => state.sum);
    const router = useRouter();

  

    let umumiySumm = 0;

    for (let i = 0; i < owners.length; i++) {
        umumiySumm = umumiySumm + owners[i].sum;
    }

    const handleRowClick = (ID) => {
        localStorage.setItem("ID", ID)
        router.push({
            pathname: '/twoCards',
        })
    }


    return (
        <Tables>
            <h3 className='text-center m-3 mb-5'>Mijozlar haqidagi to'liq ma'lumot</h3>
            <p className='ms-5 me-5 ps-5 pe-5 mb-4'>Dolor sit amet consectetur adipisicing elit. Eaque iste atque eum porro impedit error repellendus consequuntur temporibus rem ducimus vitae non id ipsa at, iusto facere, possimus, unde fuga.</p>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th rowSpan="2"><div className='thColspan'>Korxona nomi</div></th>
                                        <th rowSpan="2"><div className='thColspan'>Soliq turi</div></th>
                                        <th colSpan='2'>Hisobot topshirish</th>
                                        <th colSpan='4'>Kechiktirib taqdim etilgan xisobot turi</th>
                                        <th rowSpan='2'><div className='thColspan'>Kechikkan kuni </div></th>
                                        <th rowSpan='2'><div className='thColspan'>Jarima summasi</div></th>
                                    </tr>
                                    <tr>
                                        <th>Davri</th>
                                        <th>Muddati</th>
                                        <th>Sanasi</th>
                                        <th>Summasi</th>
                                        <th>Viloyat kodi</th>
                                        <th>Tuman kodi</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {owners.map((v, i) => {
                                        return (
                                            <tr key={i} className={v.owner ? "table-success" : "table-danger"} onClick={() => handleRowClick(v.id)}>
                                                <td>{v.companyName}</td>
                                                <td>{v.soliqTuri}</td>
                                                <td>{v.davri}</td>
                                                <td>{v.muddat}</td>
                                                <td>{v.sana}</td>
                                                <td>{v.sum}</td>
                                                <td>{v.viloyatKodi}</td>
                                                <td>{v.tumanKodi}</td>
                                                <td>{v.kechuikkanKun}</td>
                                                <td>{v.jarimaSumma}</td>

                                            </tr>
                                        )

                                    })}

                                    <tr>
                                        <td colSpan='5'>Jami</td>
                                        <td>{umumiySumm}</td>
                                        <td>x</td>
                                        <td>x</td>
                                        <td>5</td>
                                        <td>25,0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Tables>
    )
}

export default Table
