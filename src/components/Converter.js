import React, { Component } from 'react';
import { parseMails } from '../utils/stringManipulation';
import * as Papa from 'papaparse';
import { createVirtualFileForDownload } from '../utils/download';
import { Button } from './Button';

const labelTextArea = 'Emails :';
const buttonLabel = 'Generate csv';
const placeholderTextArea =
  'Enter the text in which you want to extract emails address and click to download a csv file';

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
      <div className={'Converter-Container'}>
        <label>{labelTextArea}</label>
        <textarea
          data-testid='textArea'
          placeholder={placeholderTextArea}
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleOnClick} label={buttonLabel} />
      </div>
    );
  }
}

export default Converter;
