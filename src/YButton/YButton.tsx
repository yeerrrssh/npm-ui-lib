// @ts-ignore
import React, {FC} from 'react';
import './YButton.css';

export interface YButtonProps {
    children;
    class_name?: string;
    red?: boolean;
    green?: boolean;
}

const YButton: FC<YButtonProps> = ({
                                       children,
                                       class_name,
                                       red,
                                       green,
                                       ...props
                                    }) => {
    const rootClasses = ['y-button'];
    if (red) {
        rootClasses.push('red-btn');
    }
    if (green) {
        rootClasses.push('green-btn');
    }
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default YButton;