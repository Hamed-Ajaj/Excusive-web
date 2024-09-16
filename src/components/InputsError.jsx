import React from 'react'

const InputsError = ({error,errorName}) => {
  return (
    <p className="text-red-500 text-sm">
        {error.type === "required" ? `${errorName} is required`: error.type === "minLength" ? `${errorName} should be at least 6 characters` : error.type === "maxLength" ? `${errorName} max length has been exceeded` : ""}
    </p>
  )
}

export default InputsError