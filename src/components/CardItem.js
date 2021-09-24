/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardItem(props) {
    return (
        <div className="cards__item">
            <Link className="cards__item__link" to="#">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img className="cards__item__img" src={props.src} alt=""/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>
            </Link>
        </div>
    )
}
