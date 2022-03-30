import React from 'react'

const UsAddress = () => {
  return (
    <div className='border p-8 bg-green-100 w-full rounded-md'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
        <div className='order-2 md:order-1'>
          <h1>Street: 1203 SN Street</h1>
          <h1>City: Washington DC</h1>
          <h1>Phone: +1(607)2333333</h1>
          <h1>Email: contact.usa@cc.com</h1>
        </div>
        <div className='order-1 md:order-2'> 
          <h1 className='text-xl md:text-2xl mb-4 md:mb-0'> USA OFFICE</h1>
        </div>
      </div>
    </div>
  )
}

export default UsAddress
