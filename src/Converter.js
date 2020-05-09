import React, { Component } from 'react';

const labelTextArea = 'emails :';
const containerStyle = { display: 'flex', width: '80%', height: '600px' };

const style = {
  alignItems: 'flex-start',
  flexGrow: '1',
  marginTop: '5px',
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
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div style={containerStyle}>
        <label>{labelTextArea}</label>
        <textarea style={style} value={this.state.textAreaValue} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Converter;
