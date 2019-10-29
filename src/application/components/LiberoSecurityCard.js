import React from 'react';
import '../../App.css';

import { Icon } from 'semantic-ui-react'


class LiberoSecurityCard extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {
        const { iconName, security } = this.props
        return (
            <div className="LiberoSecurityCard" >
                <Icon name={iconName} size='big' />
                <p className="Responsive-Text" >{security}</p>
            </div>
        );
    }
}

export default LiberoSecurityCard;
