import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    
    this.setState({ item: e.target.value });
  };

 
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ item: "" });
  };

  render() {
    return (
        
      <form onSubmit={this.submitItem}>
        <input className = "ui transparent input"
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button className = "ui inverted red button">Add</button>
      </form>
    
      
    );
  }
}

export default TodoForm;