import React from 'react'
import All from '../../components/all'
import Link from 'next/link'
import { WorkWrapper } from '../../styleW/documentTW'
import { AiOutlineDoubleLeft } from 'react-icons/ai';


const Inputs = () => {
    return (
        <All>
            <WorkWrapper>
                <div className="container bg1">
                    <div className="workTime">
                        <Link href='topshiriq'>
                            <a>
                            <button className='btn btn-primary'><AiOutlineDoubleLeft/></button>
                            </a>
                        </Link>
                    </div>
                    <div className="row bg2">
                        <h1 className='text-center p-2'>Yangi topshiriq</h1>
                        <div className="col-md-6 col-sm-12">
                            <div className='p-2'>
                                <label htmlFor="name" className='form-label'>Ism </label>
                                <input type="text" className='w-100 form-control mb-4' placeholder='Ibrohim' id='name' />

                                <label htmlFor="sureName" className='form-label'>Familiya </label>
                                <input type="text" className='w-100 form-control  mb-4' placeholder='Akromov' id='sureName' />

                                <div className='mb-3'>
                                    {/* <DatePickers></DatePickers> */}
                                </div>

                                <label htmlFor="passport" className='form-label'>Passport ID</label>
                                <input type="text" className='w-100 form-control  mb-4' placeholder='LL2361020' id='passport' />

                                <label htmlFor="numbers" className='form-label'>Telefon raqam</label>
                                <input type="number" className='w-100 form-control' placeholder='+8898-(33)-236-56-89' id='numbers' />

                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className='p-2'>
                                <label htmlFor="country" className='form-label'>Yashash manzilingiz</label>
                                <input type="text" className='w-100 form-control  mb-4' placeholder='Toshkent shahri, Yashnobod tumani' id='country' />

                                <label htmlFor="job" className='form-label'>Tug'ilgan sana</label>
                                <input type="text" className='w-100 form-control  mb-4' placeholder='Businessman' id='job' />

                                <label htmlFor="country" className='form-label'>Hujjat turi</label>
                                <input type="number" className='w-100 form-control  mb-4' placeholder='4500 6321 4589 3265' id='country' />
                                <div>
                                    {/* <CustomizedSwitches></CustomizedSwitches> */}
                                </div>

                                <button className='btn btn-primary mt-3'>Save</button>


                            </div>
                        </div>
                    </div>
                </div>

            </WorkWrapper>
        </All>
    )
}

export default Inputs
