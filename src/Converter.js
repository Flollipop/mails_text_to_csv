import React, { Component } from 'react';
import { parseMails } from './utils/stringManipulation';
import * as Papa from 'papaparse';
import { createVirtualFileForDownload } from './utils/download';
import { Button } from './Button';

const labelTextArea = 'Emails :';
const placeholderTextArea =
  'Enter the text in which you want to extract emails address and click to download a csv file';

const containerStyle = { display: 'flex', width: '80%', height: '600px' };

const style = {
  alignItems: 'flex-start',
  flex: '1',
  marginLeft: '25px',
  marginRight: '25px',
  marginBottom: '25px',
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
        <textarea
          style={style}
          placeholder={placeholderTextArea}
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleOnClick} />
      </div>
    );
  }
}

export default Converter;
