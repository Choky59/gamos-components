/// <reference types="react" />
import './label.css';
export interface LabelProps {
    /**
     * string to show in label
     */
    title?: string;
    /**
     * define background color of label
     */
    backgroundColor?: "red" | "blue" | "green" | 'white';
    /**
     * size of the label
     */
    size?: "normal" | "h1" | "h2" | "h3";
}
export declare const Label: ({ title, backgroundColor, size }: LabelProps) => JSX.Element;
