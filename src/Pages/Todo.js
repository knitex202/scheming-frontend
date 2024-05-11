import React from 'react'
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
function Todo() {

    const createTodo = async ()=>{
        
    }

  return (
    <div className='  flex flex-col items-center'>
        <div className='bg-gray-500 flex flex-col items-center w-screen' >
        <input className=' mt-5 border-2 border-gray-500 w-96' type="text" placeholder='this is a test'/>
        <button className='bg-blue-500 text-white mt-5 px-5 py-2 rounded-md w-40 hover:bg-blue-700 delay-75'>Add</button>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Todo