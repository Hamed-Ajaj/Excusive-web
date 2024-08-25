import React from 'react'

const CategoryItems = ({params}) => {
    const {categoryName} = params
  return (
    <div>{categoryName}</div>
  )
}

export default CategoryItems