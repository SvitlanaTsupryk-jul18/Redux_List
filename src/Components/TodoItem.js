import React from 'react';
import User from './User'

const TodoItem = ({ item, toggleTodo }) => (
    <tr>
        <td>{item.id}</td>

        <td>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTodo(item)}
            />
        </td>

        <td>
            {item.title}
        </td>

        <td>
            <User user={item.user} />
        </td>
    </tr>
);

export default TodoItem