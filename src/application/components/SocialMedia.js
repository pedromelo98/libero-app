import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react';

class SocialMedia extends React.PureComponent {

    render() {
        return (
            <div className="Social-media" >
                <div className="Icon-component" >
                    <p className='Icon-text' >facebook</p>
                    <Icon size='big' name="facebook f" />
                </div>
                <div className="Icon-component" >
                    <Icon size='big' name="instagram" />
                </div>
                <div className="Icon-component" >
                    <Icon size='big' name="google play" />
                </div>
                <div className="Icon-component" >
                    <Icon size='big' name="app store ios" />
                </div>
            </div>

        );
    }
}

export default SocialMedia;
