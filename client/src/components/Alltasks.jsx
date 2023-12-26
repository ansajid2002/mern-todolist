import React, { useEffect, useState } from 'react'
import { Adminurl } from '../App'


import Createtask from './Createtask';
import Singletask from './Singletask';

const Alltasks = () => {

    const [allTasksData, setAlltasksData] = useState(null)

    console.log(allTasksData, "GET REQUEST FOR GETTING DATA FROM BACKED");

    const getAllTasks = async () => {
        const getTasks = await fetch(`${Adminurl}/api/getusers`)
        const response = await getTasks.json()
        if (response) {
            setAlltasksData(response.data)
        }

        console.log(response.data);


    }
    useEffect(() => {
        if (!allTasksData) {
            getAllTasks()

        }
    }, [Alltasks])

    return (
        <div className='border flex '>
            <section className='w-[80%]'>
                <h1 className='font-medium text-2xl mx-4 mt-6'>All Tasks</h1>
                {
                    allTasksData?.map((single) => {
                        return (

                            <Singletask key={single.id} data={single}/>
                        )
                    })
                }
            </section>
            <section className='w-[20%]'>

                <Createtask />
            </section>
        </div>
    )
}

export default Alltasks