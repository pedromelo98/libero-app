import React, { useRef } from 'react';
import '../../App.css';

function InsCard(props) {
    const card = useRef(null);
    const over = useRef(null);

    React.useEffect(() => {
        if (card.current)             card.current.style.backgroundImage = `url("${props.bg}")`;
    }, [props.bg]);
    const dealEnter = _ => {
        card.current.style.backgroundColor = `rgba(127,210,221,1) !important`;
        over.current.style.backgroundColor = "rgba(127,210,221,1) !important";
    };

    const dealLeave = _ => {
        card.current.style.backgroundColor = '';
        over.current.style.backgroundColor = '';
    };

    return (
        <div ref={card} className="Insurance-card" onMouseEnter={dealEnter} onMouseLeave={dealLeave}>

            <div className="card-content" onMouseEnter={dealEnter}>
                <a href="#" className="card-topic">{props.insurance}</a>
                <h3>{props.text}</h3>
            </div>
            <div ref={over} className="card-overlay"></div>
        </div>
    );

}
// url("https://blog.benner.com.br/hubfs/medico%20especialista.jpg")

export default InsCard;