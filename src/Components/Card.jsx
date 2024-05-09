import React from 'react'
import mainimg from "../images/katie-zaferes.png"
import starimg from "../images/Star.png"


export default function Card(props) {

    let image = require(`../images/${ props.item.coverImg}`);
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {
                badgeText && <div className="status">{badgeText}</div>
                
            }
            <img className='card-img' src={image} alt="Item image" />
            <div className="card-rating">
                <img className='ratting-img' src={starimg} alt="Rating imagge" />
                <span>{props.item.stats.rating}</span>
                <span className='grey'>({props.item.stats.reviewCount} ).</span>
                <span className='grey'>{props.item.location}</span>
            </div>
            <h2 className='card--title'>
                {props.item.title}
            </h2>
            <p className="price">
                <span className='bold'>From ${props.item.price} </span>
                <span>/ person</span>
            </p>


        </div>
    )
}
