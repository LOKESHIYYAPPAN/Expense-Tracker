import React from 'react';

const Alert = ({ dialogShown, dialogMsg, handleReset, cancelReset }) => {
    if (!dialogShown) return null;

    return (
        <div className='alertDiv'>
            <p>{dialogMsg}</p>
            <div className="btns">
                <button type="button" onClick={cancelReset}>Cancel</button>
                <button type="button" onClick={handleReset}>Sure</button>
            </div>
        </div>
    );
};

export default Alert;
