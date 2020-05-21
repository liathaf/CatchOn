import React from 'react'

function TextField(props) {
    const {field, label, value, onChange, error} = props
    return (
        <div>
            <label>{label}: </label>
            <input type={field} name={field}  onChange={ onChange } />
    <p className="formError">{error}</p>
        </div>
    )
}


export default TextField;