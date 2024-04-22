// @ts-ignore
import React, {FC} from 'react';
import './YDiv.css';

export interface YDivProps {
    children;
    class_name?: string;
    center?: boolean;
    end?: boolean;
    all_center?: boolean;
}

const YDiv: FC<YDivProps> = ({
                                children,
                                class_name,
                                center,
                                end,
                                all_center,
                                ...props
                             }) => {
    const rootClasses = ['y-div'];
    if (class_name) {
        rootClasses.push(class_name);
    }
    if (center) {
        rootClasses.push('y-div-center');
    }
    if (end) {
        rootClasses.push('y-div-end');
    }
    if (all_center) {
        rootClasses.push('y-div-center-absolute')
    }
    return (
        <div {...props} className={rootClasses.join(' ')}>
            {children}
        </div>
    );
};

export default YDiv;