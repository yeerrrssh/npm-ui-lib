// @ts-ignore
import React, {FC} from 'react';
import './YOutput.css';

export interface YOutputProps {
    placeholder: string;
    label?: string;
    class_name?: string;
}

const YOutput: FC<YOutputProps> = ({
                                     placeholder,
                                     label,
                                     class_name,
                                     ...props
                                 }) => {
    const rootClasses = ['y-output']
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <label style={{display: "flex", flexDirection: "column"}}>
            {label}
            <input className={rootClasses.join(' ')} placeholder={placeholder} {...props} disabled={true}/>
        </label>
    );
};

export default YOutput;