import React from 'react'
import { useSelector } from 'react-redux'
import Tables from '../../styleW/table'
import { useRouter } from 'next/router'
import { BiDownload } from "react-icons/bi"
import { CSVLink } from 'react-csv'
import All from '../../components/all'
import Link from 'next/link'
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import Head from 'next/head'
import NativePickers from '../../components/data'
import NativePickers2 from '../../components/data2'

// Bu page da table dagi istalgan malumotlarni ustiga bosilganda shu klientni page iga otadi


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
        console.log(ID);
    }



    return (
        <All>
            <Head>
                <title>Soliq.uz</title>
                <meta name="description" content="Uzbekistan soliq haqida umumiy malumot" />
                <meta name="key words" content="Ozbekiston soliq idorasi, soliq turlari, soliq haqidagi hujjatlar" />
                <link rel="icon" href="https://www.advantour.com/img/uzbekistan/symbolics/gerb_big.jpg" />
            </Head>
            <Tables>
                <div className='p-4'>
                    <div>
                        <h1 className='ttt'>
                            salom
                        </h1>
                    </div>
                    <div>
                        <Link href='topshiriq'>
                            <a>
                                <button className='btn btn-primary'><AiOutlineDoubleLeft /></button>
                            </a>
                        </Link>
                    </div>
                    <h3 className='text-center m-3'>Mijozlar haqidagi to'liq ma'lumot</h3>
                    <p className='ms-5 me-5 ps-5 pe-5 mb-4'>Dolor sit amet consectetur adipisicing elit. Eaque iste atque eum porro impedit error repellendus consequuntur temporibus rem ducimus vitae non id ipsa at, iusto facere, possimus, unde fuga.</p>

                    <div className="d-flex  ">
                        <div className="nimadir1 d-flex g">

                            <div className='d-flex justify-content-center bilmiman2'>
                                <div className='w-100 m-2'>
                                    <label htmlFor="tuman1">Viloyat</label>
                                    <select className="form-select" id="tuman1" aria-label="Default select example">
                                        <option selected>20 MPI</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex justify-content-center bilmiman2'>
                            <div className='w-50 m-2'>
                                <label htmlFor="tuman2">Tuman</label>
                                <select className="form-select" id="tuman2" aria-label="Default select example">
                                    <option selected>10 MPI</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div className="nimadir1 d-flex">
                            <div className='kalendar bilmiman'>
                                <NativePickers />
                            </div>
                            <div className='kalendar bilmiman'>
                                <NativePickers2 />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end mt-3'>

                        <CSVLink className='btn btn-primary fs-4' data={owners}><BiDownload /></CSVLink>
                    </div>
                </div>

                <div className=" w-100">
                    <table className='table table-hover' id="tableEx">
                        <thead>
                            <tr>
                                <th rowSpan="2"><div className='thColspan'>Korxona nomi</div></th>
                                <th rowSpan="2"><div className='thColspan'>Soliq turi</div></th>
                                <th colSpan='2'>Hisobot topshirish </th>
                                <th colSpan='4'>Kechiktirib taqdim etilgan xisobot turi</th>
                                <th rowSpan='2'><div className='thColspan'>Kechikkan kuni </div></th>
                                <th rowSpan='2'><div className='thColspan'>Jarima summasi</div></th>
                                <th><div className='thColspan'>buttons</div></th>
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
                                    <tr key={i} className={v.owner == "yashil" && "yashil" || v.owner == "qizil" && "qizil" || 'bg-warning'} onClick={() => handleRowClick(v.id)}>
                                        <td>{v.companyName}</td>
                                        <td>{v.soliqTuri}</td>
                                        <td>{v.oy}</td>
                                        <td>{v.muddati}</td>
                                        <td>{v.sanasi}</td>
                                        <td>{v.sum}</td>
                                        <td>{v.viloyatKodi}</td>
                                        <td>{v.tumanKodi}</td>
                                        <td>{v.kechikanKun}</td>
                                        <td>{v.jarimaSumma}</td>
                                        <td className={v.owner == "qizil" && "d-block" || 'd-none'} ><button className='btn btn-danger m-1'>ozgartirish</button>  <button className='btn btn-primary m-1'>otish</button></td>

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
            </Tables>
        </All>
    )
}

export default Table
