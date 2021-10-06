import React from 'react'
import Footer from './footer'
import Dashboard from './dashboard'
import Components from '../styleW/componentsW'

const All = ({ children }) => {
    return (
        <Components>
            <div className='d-flex '>

                <Dashboard />

                <div className='w-100'>
                    {children}
                </div>
            </div>

            <Footer />

        </Components>
    )
}

export default All
