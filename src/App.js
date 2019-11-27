import React , { Component }from 'react';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
state = {
    id: uuid(),
    item: "",
    editItem: false,
    items :[ 
      {
        id: 1,
        title: "Pol artish"
      },
      {
        id:2,
        title :"Idish tovoq yuvish"
      }
    ]
  };

handleChange = e => {
  this.setState({
    item: e.target.value
  });
};
handleSubmit = e => {
  e.preventDefault();

  const newItem= {
    id: this.state.id,
    title: this.state.item
  };
  const updatedArray = [...this.state.items, newItem];

  this.setState({
    item: "",
    id: uuid(),
    editItem:false,
    items:updatedArray
  });


};
clearList = () =>  {
  this.setState({
    items:[]
  });
};
handleEdit = id => {
  const filteredItems =this.state.items.filter(item => item.id !== id);
  const selectedItem=this.state.items.find(item => item.id === id);
  this.setState({
    items:filteredItems,
    item: selectedItem.title,
    id: id,
    editItem :true
  });

};
handleDelete = id => {
  const filteredItems =this.state.items.filter(item => item.id !== id);
  this.setState({
    items:filteredItems
  });
};

  
  render() { 
  return (
    <div>
      <div className="container">
        <TodoInput 
          item={this.state.item} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList 
          items={this.state.items}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          clearList={this.clearList}
        />

      </div>
      
    </div>
  );
}
}

export default App;

// react-router