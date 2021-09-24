import React from 'react';
import './HeroSection.css';
import Video from '../videos/video-1.mp4';
import {ButtonLight, ButtonPrimary } from './Button';

export default function HeroSection() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted type="video/mp4"/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-button">
                <ButtonLight className="hero-button-light">GET STARTED</ButtonLight >
                <ButtonPrimary className="hero-button-primary">WATCH TRAILER <i className="far fa-play-circle" /></ButtonPrimary>
            </div>
        </div>
    )
}
