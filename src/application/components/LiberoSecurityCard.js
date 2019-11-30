import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react';

class LiberoSecurityCard extends React.PureComponent {

    render() {
        const { iconName, security, link } = this.props;
        return (
            <a href={link} >
                <div className="LiberoSecurityCard" >
                    <Icon name={iconName} size={`${this.props.size !== undefined ? this.props.size : 'big'}`} />
                    <p>{security}</p>
                </div>
            </a>
        );
    }
}

export default LiberoSecurityCard;
