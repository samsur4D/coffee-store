
import './App.css'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { IoEyeSharp } from "react-icons/io5";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


function App() {

const [coffees , setCoffees] = useState([])
console.log(coffees);
  useEffect(()=>{
    fetch("http://localhost:5000/coffee")
    .then(res=> res.json())
    .then(data=>{
      setCoffees(data)
    })
  },[])


const handelDelete = (_id) =>{
  console.log(_id);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/coffee/${_id}` , {
        method: 'DELETE',
       
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            Swal.fire({
        title: "Deleted!",
        text: "Your coffee has been deleted.",
        icon: "success"
                    })
        }
        fetch("http://localhost:5000/coffee")
        .then(res=> res.json())
        .then(data=>{
          setCoffees(data)
        })
      })
      // console.log('delete conmfirm')
      
    }
  });
}

  
  return (
    <>
     
      <h1 className='text-9xl   flex justify-center text-black font-bold'>OUR  COFFEE ITEM  : {coffees.length}</h1>
      
     
    
     {/* {
      coffees.map(coffee => <p>{coffee.name}</p>)
     } */}
  <div className='grid grid-cols-1 lg:grid-cols-3 mt-20  '>
  { 
      coffees.map(coffee => ( 
        <div key={coffee._id} className="max-w-md rounded-md border border-blue-950 mb-5 bg-orange-200 shadow-md dark:bg-gray-50 dark:text-gray-800" >
        <img src={coffee.photourl} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{coffee.name}</h2>
            <p className="dark:text-gray-800">{coffee.description}</p>
          </div>
         <div className='flex justify-center gap-2'>
         <button type="button" className="  rounded-md bg-red-400 flex items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-violet-600 dark:text-gray-50"><IoEyeSharp  className='text-3xl'/></button>

          <Link to={`updateCoffee/${coffee._id}`}>
          <button type="button" className=" rounded-md bg-red-500 flex items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-violet-600 dark:text-gray-50"><BsPencilFill  className='text-3xl'/></button>
          </Link>

          <button type="button" onClick={()=>handelDelete(coffee._id)} className=" rounded-md bg-red-600 flex items-center justify-center w-full p-3 font-semibold tracking-wide  dark:bg-violet-600 dark:text-gray-50"><MdDelete className="text-3xl"/></button>
         </div>
        </div>
      </div>
      ))
     }
  </div>
    
    </>
  )
}

export default App
