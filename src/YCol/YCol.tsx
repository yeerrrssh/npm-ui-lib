// @ts-ignore
import React, {FC} from "react";
import './YCol.css';

export interface YColProps {
    children;
    class_name?: string;
    size?: number;
}

const YCol: FC<YColProps> = ({
                                     children,
                                     class_name,
                                     size,
                                     ...props
                                 }) => {
    const rootClasses = ['y-col'];
    if (size === 1) {
        rootClasses.push('col-1');
    } else if (size === 2) {
        rootClasses.push('col-2');
    } else if (size === 3) {
        rootClasses.push('col-3');
    } else if (size === 4) {
        rootClasses.push('col-4');
    } else if (size === 5) {
        rootClasses.push('col-5');
    } else if (size === 6) {
        rootClasses.push('col-6');
    } else if (size === 7) {
        rootClasses.push('col-7');
    } else if (size === 8) {
        rootClasses.push('col-8');
    } else if (size === 9) {
        rootClasses.push('col-9');
    } else if (size === 10) {
        rootClasses.push('col-10');
    } else if (size === 11) {
        rootClasses.push('col-11');
    } else if (size === 12) {
        rootClasses.push('col-12');
    }
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <div {...props} className={rootClasses.join(' ')}>
            {children}
        </div>
    );
};

export default YCol;