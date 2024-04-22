// @ts-ignore
import React, {FC} from 'react';
import './YIndicator.css';

export interface YIndicatorProps {
    red?: boolean;
    green?: boolean;
    yellow?: boolean;
    class_name?: string;
}

const YIndicator: FC<YIndicatorProps> = ({
                                       red,
                                       green,
                                       yellow,
                                       class_name,
                                       ...props
                                   }) => {
    const rootClasses = ['y-indicator']
    if (class_name) {
        rootClasses.push(class_name);
    }
    if (red) {
        rootClasses.push('red')
    }
    if (green) {
        rootClasses.push('green')
    }
    if (yellow) {
        rootClasses.push('yellow')
    }
    return (
        <div className={rootClasses.join(' ')} {...props}/>
    );
};

export default YIndicator;