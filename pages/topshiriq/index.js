import React from 'react'
import All from '../../components/all'
import Link from 'next/link'
import Documents from '../../styleW/documents'
import { FaPlus } from 'react-icons/fa';


const Topshiriq = () => {
    return (
        <All>
            <Documents>
                <div className="container">
                    {/* <div className="custom-shape-divider-bottom-1632912464">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div> */}
                    <div className="NewWork">
                        <Link href='topshiriqUchunInput'>
                            <button className='btn btn-primary'><FaPlus /></button>
                        </Link>
                    </div>
                    <div className="row ff">
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <Link href='table' >
                                    <a>
                                        <div className='topshiriqCard'>
                                            topshiriq 1
                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <Link href='' >
                                    <a>
                                        <div className='topshiriqCard'>
                                            topshiriq 2
                                        </div>
                                    </a>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </Documents>
        </All>
    )
}

export default Topshiriq
