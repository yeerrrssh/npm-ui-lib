// @ts-ignore
import React, {FC} from "react";
import './YRow.css';

export interface YRowProps {
    children;
    class_name?: string;
}

const YRow: FC<YRowProps> = ({
                                    children,
                                    class_name,
                                    ...props
                                }) => {
    const rootClasses = ['y-row'];
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <div {...props} className={rootClasses.join(' ')}>
            {children}
        </div>
    );
};

export default YRow;