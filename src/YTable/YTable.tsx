// @ts-ignore
import React, {FC} from 'react';
import './YTable.css';

export interface YTableProps {
    children;
    class_name?: string;
}

const YTable: FC<YTableProps> = ({
                                           children,
                                           class_name,
                                           ...props
                                       }) => {
    const rootClasses = ['y-table']
    if (class_name) {
        rootClasses.push(class_name);
    }
    return (
        <table className={rootClasses.join(' ')} {...props}>
            {children}
        </table>
    );
};

export default YTable;