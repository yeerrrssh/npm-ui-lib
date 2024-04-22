// @ts-ignore
import React, {FC} from 'react';
import './YLink.css';

export interface YLinkProps {
    children;
    class_name?: string;
    red?: boolean;
    green?: boolean;
}

const YLink: FC<YLinkProps> = ({
                                       children,
                                       class_name,
                                       red,
                                       green,
                                       ...props
                                   }) => {
    const rootClasses = ['y-link'];
    if (red) {
        rootClasses.push('red-link');
    }
    if (green) {
        rootClasses.push('green-link');
    }
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <a {...props} className={rootClasses.join(' ')}>
            {children}
        </a>
    );
};

export default YLink;