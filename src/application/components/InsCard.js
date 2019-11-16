import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import '../../App.css';

function InsCard(props) {
    const card = useRef(null);
    const over = useRef(null);

    React.useEffect(() => {
        if (card.current) card.current.style.backgroundImage = `url("${props.bg}")`;
    }, [props.bg]);


    const dealEnter = _ => over.current.style.backgroundColor = "rgba(24,42,78,0.9)";
    const dealLeave = _ => over.current.style.backgroundColor = '';

    return (
        <div ref={card} className="Insurance-card" onMouseEnter={dealEnter} onMouseLeave={dealLeave}>

            <div className="card-content">
                <Link to="/insurance">
                    <a href={`#${props.insurance}`} className="card-topic">{props.insurance}</a>
                </Link>
                <h3>{props.text}</h3>
            </div>
            <div ref={over} className="card-overlay"></div>
        </div>
    );

}
// url("https://blog.benner.com.br/hubfs/medico%20especialista.jpg")

export default InsCard;