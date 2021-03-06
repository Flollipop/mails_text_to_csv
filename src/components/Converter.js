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
    const { textAreaValue } = this.state;
    return (
      <div className={'Converter-Container'}>
        <label htmlFor='textInput'>{labelTextArea}</label>
        <textarea
          data-testid='textArea'
          id='textInput'
          placeholder={placeholderTextArea}
          value={textAreaValue}
          onChange={this.handleChange}
        />
        <Button
          onClick={this.handleOnClick}
          label={buttonLabel}
          disabled={textAreaValue.length === 0}
        />
      </div>
    );
  }
}

export default Converter;
