import React from 'react';
import Classes from './message.module.css';

export default props => {
    return (
        <div className={Classes.msg}>
            {props.children}
        </div>
    )
}

