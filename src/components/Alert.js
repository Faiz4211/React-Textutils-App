import React from 'react';

const Alert = ({ alert }) => {

    const Capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            {alert ? <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(alert.type)}</strong> : {alert.msg}
            </div> : null}
        </>

    )
}

export default Alert;