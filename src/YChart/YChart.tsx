// @ts-ignore
import React, {FC} from 'react';
import './YChart.css';

export interface YChartProps {
    children;
    class_name?: string;
}

const YChart: FC<YChartProps> = ({
                                           children,
                                           class_name,
                                           ...props
                                       }) => {
    const rootClasses = ['y-chart']
    if (class_name) {
        rootClasses.push(class_name);
    }

    return (
        <>
            <script defer src="script.js"></script>
            <div id="chart" className={rootClasses.join(' ')} {...props}>
                {children}
            </div>
        </>
    );
};

export default YChart;