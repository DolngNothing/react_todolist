import TodoContainer from "../../containers/TodoContainer";
import React from "react";
import axios from 'axios'

export default class TodoList extends React.Component {
  componentDidMount(){
    axios.get("https://5e9ec500fb467500166c4658.mockapi.io/todos").then((response)=>{
      console.log(response);
    })
  }

  render() {
    return this.props.todoList.map((todo, index) => (
      <div>
        <TodoContainer value={todo} index={index} />
        <br />
      </div>
    ));
  }
}
