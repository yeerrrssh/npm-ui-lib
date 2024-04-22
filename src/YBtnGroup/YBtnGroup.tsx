// @ts-ignore
import React, {FC} from 'react';
import './YBtnGroup.css';

export interface YBtnGroupProps {
    children;
    class_name?: string;
}

const YBtnGroup: FC<YBtnGroupProps> = ({
                                             children,
                                             class_name,
                                             ...props
                                         }) => {
    const rootClasses = ['y-group-btn']
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <div className={rootClasses.join(' ')} {...props}>
            {children}
        </div>
    );
};

export default YBtnGroup;