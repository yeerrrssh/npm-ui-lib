// @ts-ignore
import React, {FC} from "react";
import './YText.css';

export interface YTextProps {
    children;
    class_name?: string;
    bold?: boolean;
}

const YText: FC<YTextProps> = ({
                                    children,
                                    class_name,
                                    bold,
                                    ...props
                                }) => {
    const rootClasses = ['y-text'];
    if (bold) {
        rootClasses.push('bold');
    }
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <p {...props} className={rootClasses.join(' ')}>
            {children}
        </p>
    );
};

export default YText;