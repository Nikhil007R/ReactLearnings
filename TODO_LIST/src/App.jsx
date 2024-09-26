import Navbar from './assets/components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="container w-1/2 bg-violet-100 my-5 mx-auto py-3 rounded-lg min-h-[80vh]"  >

        <div className="mx-5 addtodo my-5" >
          <h2 className='font-bold text-2xl my-1'>Add a Todo </h2>
          
          <input className='p-1 rounded-sm' placeholder='Type Here' type="text" />
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg mx-3'>Add</button>
        </div>

        <h2 className='text-2xl font-bold mx-5'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex justify-between">
            <div className="text mx-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="buttons mx-5 flex gap-5">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg '>Edit</button>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg '>delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
