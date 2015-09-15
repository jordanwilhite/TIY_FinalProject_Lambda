import React from 'react';
import Parse from 'parse';

const TYPES = {
  EMV: 'Electro Magnetic Variables',
  WOV: 'Wave and Optic Variables',
  MPV: 'Modern Physics Variables',
  FTP: 'Farts Too plffft',
  MV: 'Modern stuff'
}
export default class ResultBox extends React.Component {
  render() {
    let {results} = this.props
    return(
      <div className="results">
        {
          results.map(result => {
            console.log(result.get('label'));
            return (
              <li key={result.id}>
                <strong>{TYPES[result.get('type')]}</strong> {result.get('label')}: {result.get('value')}
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
