import React, { memo } from 'react';
import "../custom-button/style.scss";

const ConfirmButton = memo(({ label, onClick, color, background, className, disabled = true}) => {

    return (
        <div
            disabled={disabled}
            onClick={disabled ? undefined : onClick}
            className={`custom-button ${className} text-${color} background-${background}`}>
            {label}
        </div>
    );
}, []);

export default ConfirmButton;