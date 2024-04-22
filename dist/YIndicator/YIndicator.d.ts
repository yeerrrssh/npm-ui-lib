import { FC } from 'react';
import './YIndicator.css';
export interface YIndicatorProps {
    red?: boolean;
    green?: boolean;
    yellow?: boolean;
    class_name?: string;
}
declare const YIndicator: FC<YIndicatorProps>;
export default YIndicator;
