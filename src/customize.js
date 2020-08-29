import React from 'react';
import Features from './features';

export default function customize(props){
return (
    <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features selected={props.selected} features={props.features} updateFeature={props.updateFeature}/>
    </form>
)}