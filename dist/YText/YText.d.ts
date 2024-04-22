import { FC } from "react";
import './YText.css';
export interface YTextProps {
    children: any;
    class_name?: string;
    bold?: boolean;
}
declare const YText: FC<YTextProps>;
export default YText;
