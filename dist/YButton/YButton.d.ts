import { FC } from 'react';
import './YButton.css';
export interface YButtonProps {
    children: any;
    class_name?: string;
    red?: boolean;
    green?: boolean;
}
declare const YButton: FC<YButtonProps>;
export default YButton;
