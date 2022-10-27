import React from 'react'

function Booking() {
  return (
<section className='flex flex-col items-center justify-center gap-4'>
    <div className='flex flex-wrap items-center gap-10'>
        <input className='p-2 border-2 border-gray-100 w-[15vw] rounded-md' type="text" placeholder='ville depart' />
        <input className='p-2 border-2 border-gray-100 w-[15vw] rounded-md' type="text" placeholder='ville ariver' />
        <input className='p-2 border-2 border-gray-100 w-[15vw] rounded-md' type="date" placeholder='date' />
    </div>
    <div>
      <button className='px-4 py-2 text-white bg-orange-500 rounded-lg'>
        Rechercher
      </button>
    </div>
</section>
  )
}

export default Booking