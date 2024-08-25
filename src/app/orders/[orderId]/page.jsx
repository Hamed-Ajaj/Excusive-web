import React from 'react'

const OrderDetails = ({params}) => {
    const {orderId} = params
  return (
    <div className='min-h-[100vh]'>
        <h1>Order Details {orderId}</h1>
    </div>
  )
}

export default OrderDetails