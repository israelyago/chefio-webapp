import React from 'react';
import './tab.scss';

interface tabProps {

}

export const Tab: React.FC<tabProps> = () => {
    const classes = `tab`;
    return (
        <div className={classes}>
            <div className="tab-item tab-item--selected">Left</div>
            <div className="tab-item">Right</div>
        </div>
    )
}

export default Tab;