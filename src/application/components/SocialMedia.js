import React from 'react';
import '../styles/SocialMedia.css';
import { Icon } from 'semantic-ui-react';

class SocialMedia extends React.PureComponent {

    render() {
        return (
            <div className="Social-media" >
                <a href="https://wa.me/5534998896000" >
                    <div style={{ paddingLeft: 8.5, paddingBottom: 8.5 }} className="Icon-component" >
                        <Icon size='big' name="whatsapp" />
                        <p className='Icon-text' >Whatsapp</p>
                    </div>
                </a>
                <a href="https://pt-br.facebook.com/liberoseguros/" >
                    <div style={{ paddingBottom: 5.5 }} className="Icon-component hover-facebook" >
                        <Icon size='big' name="facebook f" />
                        <p className='Icon-text' >Facebook</p>
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
