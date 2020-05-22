import React from 'react'

function TextField(props) {
    const {field, label, value, onChange, error} = props
    return (
        <div>
            
            <input type={field} name={field}  onChange={ onChange } className="login-input" placeholder={label}/>
    <p className="formError">{error}</p>
        </div>
    )
}


export default TextField;