import React, { PropTypes, props, context } from 'react';

const SelectInput = ({name,error, value, onChange, label, options, defaultOptions }) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass  += '  has-error'; 
    }
    return(
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                 name={name} 
                 className="form-control"
                 value={value}
                 onChange={onChange}>
                 <option value="s">{defaultOptions}</option>

                 {options.map((optionss,key)=>{
                   
            
                     return  <option key={optionss.value} value={optionss.value}>{optionss.text}</option>;
                     
                })}
                 </select>
            </div>
            {error && error.length > 0 ? <div className="alert alert-danger">{error}</div> : null}
        </div>

    );
              

};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default SelectInput;