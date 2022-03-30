import React from 'react'

const BdAddress = () => {
  return (
    <div className='border p-8 bg-blue-100 w-full rounded-md'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
        <div className=' order-2 md:order-1'>
          <h1>Street: 17/4 Bonani.</h1>
          <h1>City: Dhaka</h1>
          <h1>Phone: +8801622222000</h1>
          <h1>Email: contact.bd@ccl.com</h1>
        </div>
        <div className='order-1 md:order-2 mb-6 md:mb-0'>
          <h1 className='text-xl md:text-2xl'>BANGLADESH OFFICE</h1>
        </div>
      </div>
    </div>
  )
}

export default BdAddress
