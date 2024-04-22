// @ts-ignore
import React, {FC} from 'react';
import './YDropdown.css';

export interface YDropdownProps {
    children;
    class_name?: string;
}

const YDropdown: FC<YDropdownProps> = ({
                                           children,
                                           class_name,
                                           ...props
                                       }) => {
    const rootClasses = ['y-dropdown']
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <select className={rootClasses.join(' ')} {...props}>
            {children}
        </select>
    );
};

export default YDropdown;