import React from 'react';
import TodoItem from './TodoItem';


export const SORT_ORDER_COMPLETED = 'completed';
export const SORT_ORDER_TITLE = 'title';
export const SORT_ORDER_USER = 'user';
export const SORT_ORDER_ID = 'id';

const TodoList = ({ items, onSort, sortField, toggleTodo }) => (
    <table className="TodoList">
        <thead>
            <tr>
                <th
                    className={sortField === SORT_ORDER_ID ? 'active' : ''}
                    onClick={() => onSort(SORT_ORDER_ID)}
                >
                    id
          </th>

                <th
                    className={sortField === SORT_ORDER_COMPLETED ? 'active' : ''}
                    onClick={() => onSort(SORT_ORDER_COMPLETED)}
                >
                    done
          </th>

                <th
                    className={sortField === SORT_ORDER_TITLE ? 'active' : ''}
                    onClick={() => onSort(SORT_ORDER_TITLE)}
                >
                    title
          </th>

                <th
                    className={sortField === SORT_ORDER_USER ? 'active' : ''}
                    onClick={() => onSort(SORT_ORDER_USER)}
                >
                    user
          </th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <TodoItem
                    key={item.id}
                    item={item}
                    toggleTodo={toggleTodo}
                />
            ))}
        </tbody>
    </table>
);

export default TodoList;
