import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react'

class LiberoSecurityCard extends React.PureComponent {

    render() {
        const { iconName, security } = this.props;
        return (
            <div className="LiberoSecurityCard" >
                <Icon name={iconName} size={`${this.props.size !== undefined ? this.props.size : 'big'}`} />
                <p>{security}</p>
            </div>
        );
    }
}

export default LiberoSecurityCard;
