
import Swal from 'sweetalert2'



const AddCoffee = () => {

    const handelAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const supplier = form.supplier.value; // Corrected to form.supplier
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;
        const newCoffee = { name, quantity, description, supplier, taste, category, details, photourl };
        console.log(newCoffee);



        // send data to the server
        fetch("http://localhost:5000/coffee", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
                 },
             body: JSON.stringify(newCoffee)
            })
      .then(res => res.json())
      .then(data => {
       console.log(data);
       if(data.insertedId){
        // alert("You clicked the button!")
        Swal.fire({
            title: 'success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
       }
        })

    }

    return (
        <div>
            <h2 className='text-6xl font-bold flex justify-center mt-12'>Add coffee</h2>
            <section className="p-6 bg-yellow-200 container mx-auto rounded-2xl mt-10 ">

                <form onSubmit={handelAddCoffee} className="container flex flex-col mx-auto space-y-12">
                    {/* --------------------------Name And Quantity Form ---------------------------------------------- */}
                    <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold text-4xl">Coffee Store</p>
                            <img className='rounded-2xl' src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Coffee name</label>
                                <input type="text" name='name' placeholder="Coffee name" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Avialable Quantity</label>
                                <input type="text" name='quantity' placeholder="Avialable Quantity" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                            <div className="col-span-full sm:col-span-6">
                                <label htmlFor="email" className="text-lg">Description</label>
                                <input type="text" name='description' placeholder="description" className="w-full h-40 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>


                        </div>
                    </div>
                    {/* ---------------------supplier and Taste------------------------------------------ */}
                    <div className="grid grid-cols-4 gap-6 p-6 bg-yellow-300 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2  col-span-full lg:col-span-1">
                            <p className="font-bold text-4xl">Coffee Store</p>
                            <img className='rounded-2xl' src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 mt-36 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Supplier</label>
                                <input type="text" name='supplier' placeholder="Supplier" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Taste</label>
                                <input type="text" name='taste' placeholder="Taste" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                        </div>
                    </div>
                    {/* -------------------catagory And  Details form------------------------------------------- */}
                    <div className="grid grid-cols-4 bg-yellow-400 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="space-y-2  col-span-full lg:col-span-1">
                            <p className="font-bold text-4xl">Coffee Store</p>
                            <img className='rounded-2xl' src="https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 mt-36 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">category</label>
                                <input type="text" name='category' placeholder="category" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Details</label>
                                <input type="text" name='details' placeholder="details" className="w-full h-16 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>

                        </div>
                    </div>
                    {/* -------------------------------------------------------------- */}
                    <div className="grid grid-cols-4   bg-yellow-500 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 mt-36 gap-4 w-full mb-36 col-span-full lg:col-span-3">
                            <div className=" sm:col-span-3 w-full">
                                <label htmlFor="firstname" className="text-5xl font-semibold">Photo Url</label>
                                <input type="text" name='photourl' placeholder="Photo Url" className="w-full  h-16 rounded-md   dark:text-gray-50 " />
                            </div>

                            <div className="space-y-2   lg:col-span-3">
                                <p className="font-bold text-2xl ml-40">Coffee Store</p>
                                <img className='rounded-2xl ml-40 w-full  ' src="https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <p className="text-xs ml-40">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                            </div>

                        </div>
                    </div>
                    {/* ------------------------------------------------------------------- */}

                    <input className='text-3xl font-bold  btn btn-block' type="submit" value="Add Coffee" />

                </form>

            </section>
        </div>
    );
};

export default AddCoffee;
