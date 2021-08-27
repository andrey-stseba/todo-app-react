import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Field, Form, Formik } from 'formik';
import s from './TackListItem.module.scss';

function TaskListItem ({ tasks, setTasks }) {
  const deleteTask = id => {
    const newTasks = [...tasks];
    newTasks.splice(
      newTasks.findIndex(t => id === t.id),
      1
    );

    setTasks(newTasks);
  };

  const checkTask = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });

    setTasks(newTasks);
  };

  const mapTasks = t => (
    <li key={t.id} className={s.itemContainer}>
      <Formik initialValues={{ checkedTodo: t.isDone }}>
        <Form>
          <Field
            type='checkbox'
            name='checkedTodo'
            onClick={e => checkTask(t)}
          />
        </Form>
      </Formik>
      <span>{t.body}</span>
      <button
        onClick={e => {
          deleteTask(t.id);
        }}
      >
        <DeleteOutlineIcon />
      </button>
    </li>
  );
  return (
    <div>
      <ul className={s.itemsContainer}>{tasks.map(mapTasks)}</ul>
    </div>
  );
}

export default TaskListItem;
