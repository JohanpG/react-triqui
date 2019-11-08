import React from 'react';

class Square extends React.Component 
{
  //Constructor for state
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  //Render function
  render() {
    return (
      <button 
        className="square"  
        onClick={this.showAlert.bind()}
      >
        {this.props.value}
      </button>
    );
  }
  //Component Methods
  showAlert = () => {
    //alert('click'+ this.props.value );
    this.props.onClick();

  }

  setSquareValue = () => {
    this.setState({value: 'X'});

  }
}
export default Square; 