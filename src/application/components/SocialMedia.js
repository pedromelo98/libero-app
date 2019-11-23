import React from 'react';
import '../../App.css';
import { Icon } from 'semantic-ui-react';

class SocialMedia extends React.PureComponent {

    render() {
        return (
            <div className="Social-media" >
                <a href="https://wa.me/15551234567" >
                    <div style={{ paddingLeft: 9 }} className="Icon-component" >
                        <Icon size='big' name="whatsapp" />
                        <p className='Icon-text' >whatsapp</p>
                    </div>
                </a>
                <a href="https://pt-br.facebook.com/liberoseguros/" >
                    <div className="Icon-component hover-facebook" >
                        <Icon size='big' name="facebook f" />
                        <p className='Icon-text' >facebook</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/liberoseguros/" >
                    <div style={{ paddingLeft: 8 }} className="Icon-component" >
                        <Icon size='big' name="instagram" />
                        <p className='Icon-text' >Instagram</p>
                    </div>
                </a>
            </div>

        );
    }
}

export default SocialMedia;
