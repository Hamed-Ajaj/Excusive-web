import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader