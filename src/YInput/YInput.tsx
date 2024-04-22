// @ts-ignore
import React, {FC} from 'react';
import './YInput.css';

export interface YInputProps {
    number?: boolean;
    placeholder: string;
    label?: string;
    class_name?: string;
}

const YInput: FC<YInputProps> = ({
                                     number,
                                     placeholder,
                                     label,
                                     class_name,
                                     ...props
                                }) => {
    const rootClasses = ['y-input']
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <label style={{display: "flex", flexDirection: "column"}}>
            {label}
            <input type={number ? 'number' : 'text'} className={rootClasses.join(' ')} placeholder={placeholder} {...props}/>
        </label>
    );
};

export default YInput;