import React, { memo } from 'react';
import "./style.scss"

const CustomButton = memo(({ label, onClick, color, background, className = "", disabled = false }) => {

    return (
        <div
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            className={`custom-button ${className} text-${color} background-${background}`}>
            {label}
        </div>
    );
}, []);

export default CustomButton;