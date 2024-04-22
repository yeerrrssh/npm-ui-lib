import { FC } from "react";
import './YCol.css';
export interface YColProps {
    children: any;
    class_name?: string;
    size?: number;
}
declare const YCol: FC<YColProps>;
export default YCol;
