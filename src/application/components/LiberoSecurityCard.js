import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class LiberoSecurityCard extends React.PureComponent {

    renderComponent() {
        return (
            <div className="LiberoSecurityCard" >
                <Icon name={this.props.iconName} size={`${this.props.size !== undefined ? this.props.size : 'big'}`} />
                <p>{this.props.security}</p>
            </div>
        )
    }

    render() {
        const { link, componentLink } = this.props;
        return (
            < >
                {componentLink ?
                    <Link to={link}>
                        {this.renderComponent()}
                    </Link>
                    :
                    <a href={link} >
                        {this.renderComponent()}
                    </a>
                }

            </>
        );
    }
}

export default LiberoSecurityCard;
