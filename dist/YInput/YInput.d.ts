import { FC } from 'react';
import './YInput.css';
export interface YInputProps {
    number?: boolean;
    placeholder: string;
    label?: string;
    class_name?: string;
}
declare const YInput: FC<YInputProps>;
export default YInput;
