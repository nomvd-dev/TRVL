/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import "./Card.css";
import Image1 from '../images/img-9.jpg';
import Image2 from '../images/img-2.jpg';
import Image3 from '../images/img-3.jpg';
import Image4 from '../images/img-4.jpg';
import Image5 from '../images/img-5.jpg';
import CardItem from './CardItem';

export default function Cards() {
    return (
        <div className="cards">
            <h2>Check out these EPIC Destination!</h2>
            <div className="cards-container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-4">
                        <CardItem
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            src={Image1}
                        />
                    </div>
                    <div className="col-12 col-lg-6 mb-4">
                        <CardItem
                            text="Travel through the Islands of Bali in a Private Cruise"
                            src={Image2}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-4">
                        <CardItem
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            src={Image3}
                        />
                    </div>
                    <div className="col-12 col-lg-4 mb-4">
                        <CardItem
                            text="Experience Football on Top of the Himalayan Mountains"
                            src={Image4}
                        />
                    </div>
                    <div className="col-12 col-lg-4 mb-4">
                        <CardItem
                            text="Ride through the Sahara Desert on a guided camel tour"
                            src={Image5}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
