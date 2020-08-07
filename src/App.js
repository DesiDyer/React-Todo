import React from "react";


import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
import ClearBtn from './components/clearBtn';

const todoItems = [
  
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todoItems 
    };
  }

  // Class methods to update state
  toggleItem = itemId => {
    console.log(itemId);
    
    this.setState({
    
      todoItems: this.state.todoItems.map(item => {
        if (itemId === item.id) {
          return {
            
            ...item,
            done: !item.done
          };
        }
        return item;
      })
    });
  };

  // Class method to add a grocery item
  addItem = item => {
    const newItem = {
      name: item,
      id: Date.now(),
      done: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
  };

  cleardone = e => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter(item => !item.done)
    });
  };

  render() {
    return (
      <div className="App">
      <div>
     <TodoForm addItem={this.addItem} 
        
     />
     </div>
         
        
         
         
      <div id ="paper">
      <div id = "title-container">
      <h1>Todo List</h1>
      </div>
      <div id ="pattern">
     
      <div id ="content">
      
      <div className="header">
      
     
        
        </div>
        
        <TodoList
          todoItems={this.state.todoItems}
          toggleItem={this.toggleItem}
          
         
        />
        </div>
        </div>
        </div>
        <div className ="btn-container">
        <ClearBtn  cleardone={this.cleardone} />
        </div>
      </div>
    );
  }
}

export default App;