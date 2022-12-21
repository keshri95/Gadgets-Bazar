import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './context'
import { API } from './context';
const Pagination = () => {


    const getSomeProducts = async () => {
        try {

            const res = await fetch(API)
            const data = await res.json()
            console.log(data);
        }

        catch(error){
            console.log(error.message);
        }

    }

    useEffect(() => {

        getSomeProducts()

    }, [])
  return (
    <div>Pagination</div>
  )
}

export default Pagination