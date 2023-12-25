import React, { useEffect, useState } from 'react'
import { Adminurl } from '../App'


import Createtask from './Createtask';

const Alltasks = () => {

    const [allTasks, setAlltasks] = useState(null)
    

   
    const getAllTasks = async () => {
        const getTasks = await fetch(`${Adminurl}/api/getusers`)
        const response = await getTasks.json()
        if (response) {
            setAlltasks(response.data)
        }

        console.log(response.data);


    }
    useEffect(() => {
        if (!allTasks) {
            getAllTasks()

        }
    }, [Alltasks])

    return (
        <div className='border flex '>
            <section className='w-[80%]'>

            </section>
            <section className='w-[20%]'>
                
                <Createtask/>
            </section>
        </div>
    )
}

export default Alltasks