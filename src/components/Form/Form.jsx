import React from "react";

const Form = ({value, onChange, formName, readonly}) => {

    return (
        <div className="converter__form">
            <div>{!!formName && formName}</div>
            <input type="text" readOnly={readonly} onChange={onChange} value={value} className="converter__input" pattern="[0-9]+"/>
        </div>
      );
}

export default Form;