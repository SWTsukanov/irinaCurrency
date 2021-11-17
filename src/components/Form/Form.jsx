import React from "react";

const Form = ({value, onChange, formName, readonly}) => {

    return (
        <div>
            <div>{!!formName && formName}</div>
            <input type="number" readOnly={readonly} onChange={onChange} value={value}/>
        </div>
      );
}

export default Form;