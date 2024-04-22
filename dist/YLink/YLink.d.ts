import { FC } from 'react';
import './YLink.css';
export interface YLinkProps {
    children: any;
    class_name?: string;
    red?: boolean;
    green?: boolean;
}
declare const YLink: FC<YLinkProps>;
export default YLink;
