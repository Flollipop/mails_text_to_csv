import React, { Component } from 'react';
import { parseMails } from './utils/stringManipulation';
import * as Papa from 'papaparse';
import { createVirtualFileForDownload } from './utils/download';

const labelTextArea = 'emails :';
const containerStyle = { display: 'flex', width: '80%', height: '600px' };

const style = {
  alignItems: 'flex-start',
  flex: '1',
  marginLeft: '25px',
  marginRight: '25px',
  marginBottom: '25px',
};

const buttonStyle = {
  display: 'flex',
  maxHeight: '40px',
  backgroundColor: '#01A7CA',
  color: 'white',
  border: 0,
};
class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  handleOnClick() {
    const mails = parseMails(this.state.textAreaValue);
    const csv = Papa.unparse(mails);
    createVirtualFileForDownload(csv);
  }

  render() {
    return (
      <div style={containerStyle}>
        <label>{labelTextArea}</label>
        <textarea style={style} value={this.state.textAreaValue} onChange={this.handleChange} />
        <button style={buttonStyle} onClick={this.handleOnClick}>
          convert
        </button>
      </div>
    );
  }
}

export default Converter;
