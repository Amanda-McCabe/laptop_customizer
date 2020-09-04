import React from 'react';
import Options from './Options';

export default function Features(props){
  const features = Object.keys(props.features).map((feature, idx) => {
    return (
      <fieldset className="feature" key="feature">
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options selected={props.selected} features={props.features} feature={feature} updateFeature={props.updateFeature} /> 
      </fieldset>
    );
  });
  return features;
}
