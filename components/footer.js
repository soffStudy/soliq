import React from 'react'
import Components from '../styleW/componentsW'
import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";





const Footer = () => {
    return (
        <Components>
            <div className='footer'>
                <div className="container mt-2 pt-2 text-light">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className='m-1'>
                                <p>About</p>
                                <p>Number</p>
                                <p>Documents</p>
                                <p>Companies</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className='m-1'>
                                <p>task 1</p>
                                <p>task 1</p>
                                <p>task 1</p>
                                <p>task 1</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className='m-1'>
                                <p>task 1</p>
                                <p>task 1</p>
                                <p>task 1</p>
                                <div className='ikonkalar'>
                                    <Link href=''>
                                        <a ><AiOutlineInstagram /></a>

                                    </Link>
                                </div>

                                <div className='ikonkalar'>
                                    <Link href='' >
                                        <a><FaTelegramPlane /></a>
                                    </Link>
                                </div>

                                <div className='ikonkalar'>
                                    <Link href='' >
                                        <a><FaFacebookF /></a>
                                    </Link>
                                </div>

                                <div className='ikonkalar'>
                                    <Link href='' >
                                        <a><AiOutlineTwitter /></a>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Components>
    )
}

export default Footer
