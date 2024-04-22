import { FC } from 'react';
import './YOutput.css';
export interface YOutputProps {
    placeholder: string;
    label?: string;
    class_name?: string;
}
declare const YOutput: FC<YOutputProps>;
export default YOutput;
