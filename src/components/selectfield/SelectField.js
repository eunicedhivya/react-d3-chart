import React from 'react'

function SelectField({columnnames, type, changeFieldValue}) {
  return (
    <div>
        <select onChange={changeFieldValue}>
            {columnnames.map((names) => {
                return (
                    <>
                    <option>choose field </option>
                    <option key={names}>{names}</option>
                    </>
                )
            })}
        </select>
    </div>
  )
}

export default SelectField