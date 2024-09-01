import { memo } from "react";

const Input = memo(function Input({label, id, name, ...props}) {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id} 
                {...props}            
            />
        </div>
    );
});

export default Input;