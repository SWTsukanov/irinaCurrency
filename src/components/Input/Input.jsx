import React from "react";

const Input = ({value, onChange, formName, readonly}) => {

    return (
        <div className="converter__form">
            <div>{!!formName && formName}</div>
            <input type="text" readOnly={readonly} onChange={onChange} value={value} className="converter__input" />
        </div>
      );
}

export default Input;