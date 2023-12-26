import React from 'react'
import moment from "moment"


const Singletask = ({data}) => {

const {id,title,description,date,status} = data
    return (
    <div className="border m-4 p-2">
        <h1 className='font-bold text-xl'>{title}</h1>
        <p>{description}</p>
        <p>{moment(date).format("LL")}</p>
        <h1>Status : {status}</h1>
        <div className='flex items-center space-x-8 mt-6 mb-2'>
            <button className='border bg-green-200 p-1 rounded-md'>Edit ✒</button>
            <button className='border bg-red-200 p-1 rounded-md'>Delete ❌</button>
        </div>
    </div>
  )
}

export default Singletask