import React, { PropTypes, props, context } from 'react';

const TextInput = ({name,error, value, onChange, label, placeholder,type }) => {
    let wrapperClass = 'form-group';
    if(error && error.length > 0){
        wrapperClass  += '  has-error'; 
    }
    return(
        <div className={wrapperClass}>
            <div className="row">
                            <label className="col-md-2" htmlFor={label}>{label}</label>
            <div className="field col-md-8">
                <input
                 type={type} 
                 name={name} 
                 className="form-control"
                 value={value}
                 placeholder= {placeholder}
                 onChange={onChange} />
            </div>
            {error && error.length > 0 ? <div className="alert alert-danger">{error}</div> : null}

                </div>
        </div>

    );
              

};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired

};

export default TextInput;