import React, { useState, useEffect } from 'react';
import TaskListItem from '../../components/TaskListItem';
import TodoList from '../../components/TodoList';
import s from './TodoPage.module.scss';

function TodoPage () {
  const taskcDB = [
    {
      id: Date.now(),
      body: 'example task',
      isDone: false,
    },
  ];
  const [tasks, setTasks] = useState(taskcDB);
  const [counter, setCounter] = useState(tasks.length);

  const getCounter = () => {
    setCounter(tasks.length);
  };
  useEffect(() => {
    getCounter();
  }, [tasks.length]);

  return (
    <div className={s.containerTodoPage}>
      <div className={s.containerHeader}>
        <h3>Todos({counter})</h3>
      </div>

      <TodoList tasks={tasks} setTasks={setTasks} />
      <TaskListItem tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoPage;
