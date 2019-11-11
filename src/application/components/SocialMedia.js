import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react';

class SocialMedia extends React.PureComponent {

    render() {
        return (
            <div className="Social-media" >
                <div className="Icon-component" >
                    <Icon size='big' name="facebook f" />
                    <p className='Icon-text' >facebook</p>
                </div>
                <div style={{ paddingLeft: 5 }} className="Icon-component" >
                    <Icon size='big' name="instagram" />
                    <p className='Icon-text' >Instagram</p>
                </div>

            </div>

        );
    }
}

export default SocialMedia;
