import React from 'react'
import { useParams } from 'react-router'
import Menu from '../pages/menu';
import Table from '../pages/table';
import All from './all';

const Determination = () => {
    const { menu } = useParams();

    return (
        <div>
            <All>
                {menu === '' && <Menu /> || ""}
                {menu === 'table' && <Table /> || ""}
            </All>

        </div>
    )
}

export default Determination
