import { FC } from 'react';
import './YDiv.css';
export interface YDivProps {
    children: any;
    class_name?: string;
    center?: boolean;
    end?: boolean;
    all_center?: boolean;
}
declare const YDiv: FC<YDivProps>;
export default YDiv;
