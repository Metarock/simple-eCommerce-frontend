import React from 'react';
import './Backdrop.css';
interface BackdropProps {
    show: boolean,
    click: React.MouseEventHandler<HTMLDivElement>
}

export const Backdrop: React.FC<BackdropProps> = ({ show, click }) => {
    return (
        show && <div className="backdrop" onClick={click}></div>
    );
}