import React from 'react';
import './App.css';
import TodoList, {
  SORT_ORDER_COMPLETED,
  SORT_ORDER_TITLE,
  SORT_ORDER_USER,
  SORT_ORDER_ID,
} from './Components/TodoList';
import { getUsers, getTodos } from './Components/api';
import { connect } from 'react-redux';

class App extends React.Component {
  state = {
    query: '',
    sortField: '',
    isSortedAsc: true,
    isLoaded: false,
    todos: [],
    visibleTodos: [],
  };

  loadData = async () => {
    const [todos, users] = await Promise.all([
      getTodos(),
      getUsers(),
    ]);

    const items = todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }));

    this.setState({
      todos: items,
      visibleTodos: items,
      isLoaded: true,
    });

    this.handleSort(SORT_ORDER_ID);
  };

  handleQueryChange = (event) => {
    this.setState(
      { query: event.target.value },
      this.prepareTodos
    );
  };

  handleSort = (sortField) => {
    this.setState(
      prev => {
        const isSortedAsc = prev.sortField === sortField ? !prev.isSortedAsc : true;

        return { sortField, isSortedAsc };
      },

      this.prepareTodos,
    );
  };

  prepareTodos = () => {
    this.setState(({ isSortedAsc, todos, sortField, query }) => {
      const normalizedQuery = query.toLowerCase();

      const filteredTodos = todos.filter((todo) => {
        const searchString = `${todo.title}\n${todo.user.name}`.toLowerCase();

        return searchString.includes(normalizedQuery);
      });

      const sign = isSortedAsc ? 1 : -1;

      const callbackMap = {
        [SORT_ORDER_TITLE]: (a, b) => a.title.localeCompare(b.title) * sign,
        [SORT_ORDER_USER]: (a, b) => a.user.name.localeCompare(b.user.name) * sign,
        [SORT_ORDER_COMPLETED]: (a, b) => (a.completed - b.completed) * sign,
        [SORT_ORDER_ID]: (a, b) => (a.id - b.id) * sign,
      };

      const callback = callbackMap[sortField] || callbackMap[SORT_ORDER_ID];

      return {
        visibleTodos: filteredTodos.sort(callback),
      };
    })
  };

  toggleTodo = (todoToToggle) => {
    this.setState(
      prev => {
        const todos = prev.todos.map(todo => {
          if (todoToToggle.id !== todo.id) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        });

        return { todos };
      },

      this.prepareTodos
    );
  };

  render() {
    const { isLoaded, visibleTodos, sortField, query } = this.state;
    const unfinishedTodos = visibleTodos.filter(todo => !todo.completed);

    return (
      <div className="App">
        <h2>{unfinishedTodos.length} tasks left</h2>

        <input
          type="text"
          value={query}
          onChange={this.handleQueryChange}
          className="search"
        />

        {isLoaded ? (
          <TodoList
            items={visibleTodos}
            onSort={this.handleSort}
            sortField={sortField}
            toggleTodo={this.toggleTodo}
          />
        ) : (
            <button onClick={this.loadData} className="btn_load">Load</button>
          )}
      </div>
    );
  }
}

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increase: () => dispatch(increaseAction),
  decrease: () => dispatch(decreaseAction),
});

export default connect(mapState, mapDispatch)(App);