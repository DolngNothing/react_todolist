const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { id: state.length, content: action.content, status: false },
      ];
    }

    case "DELETE_TODO": {
      let newState = state.filter((value) => {
        return value.id !== action.id;
      });
      return newState;
    }

    case "DONE_TODO": {
      let newState = [...state];
      newState.map((value)=>{
        if(value.id===action.id){
          return value.status=!value.status;
        }
        return value.status;
      })
      return newState;
    }

    default:
      return state;
  }
};

export default todoList;
