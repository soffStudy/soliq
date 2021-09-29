import React from 'react'
import All from '../../components/all'
import Link from 'next/link'
import Documents from '../../styleW/documents'


const Topshiriq = () => {
    return (
        <All>
            <Documents>
                <div className="container">
                    <Link href='topshiriqUchunInput'>
                        <button className='btn btn-primary'>yangi topshiriq</button>
                    </Link>
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
