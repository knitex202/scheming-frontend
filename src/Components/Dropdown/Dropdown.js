import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dropdown({title, items}) {
    const [show, setShow] = useState(false)

    const handleClick = ()=>{
        setShow(!show)
    }

    const item = ()=> {
        return items.map((item,index)=>{
           return <li className='ml-8 text-left font-poppins font-semibold text-gray-600 hover:text-sky-600' key={index}><Link to={item.link}>{item.name}</Link></li>
        })
    }
  return (
    <div>
        <div className='flex justify-between p-2 cursor-pointer group' onClick={handleClick}>
        <p className='font-poppins font-semibold text-cyan-600 group-hover:text-cyan-400'>{title} </p>
        <p className='text-cyan-600 group-hover:text-cyan-400'>◢</p>    
        </div>
        <div>
            {show? <ul className=' h-20 mb-2 flex flex-col justify-around' >{item()}</ul>: null}
            </div>
    </div>
  )
}

export default Dropdown