import React from 'react';
import Parse from 'parse';

const TYPES = {
  CCF: 'Constants & Conversion Factors',
  EF: 'Electricity Functions',
  EMF: 'Electricity & Magnetism Functions',
  EMV: 'Electricity & Magnetism Variables',
  EV: 'Electricity Variables',
  FTF: 'Fluid Mechanics & Thermal Physics Functions',
  FTP: 'Fluid Mechanics & Thermal Physics Variables',
  GTF: 'Geometry & Trigonometry Functions',
  GTV: 'Geometry & Trigonometry Variables',
  MF: 'Mechanics Functions',
  MPF: 'Modern Physics Functions',
  MPV: 'Modern Physics Variables',
  MV: 'Mechanics Variables',
  PFX: 'Prefixes',
  USM: 'Unit Symbols',
  VCA: 'Values of Trig Functions for Common Angles',
  WOV: 'Waves & Optics'
}
export default class ResultBox extends React.Component {
  render(){
    let {results} = this.props
    return(
      <div className="results">
        {
          results.map(result => {
            console.log(result.get('label'));
            return (
              <li key={result.id}>
                <strong>{TYPES[result.get('type')]}</strong><br> {result.get('label')}: {result.get('value')}</br>
              </li>
            )
          })
        }
      </div>
    )
  }
};

ResultBox.defaultProps = {
  results: []
};
