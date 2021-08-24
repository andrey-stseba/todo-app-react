import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { INPUT_SCHEMA } from '../../utils/validatingSchemas';

const taskcDB = [
  {
    id: Date.now(),
    body: 'First task',
    isDone: false,
  },
];

function TodoPage () {
  const [tasks, setTasks] = useState(taskcDB);
  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };
  return (
    <div>
      <Formik
        initialValues={{ body: '' }}
        onSubmit={addTask}
        validationSchema={INPUT_SCHEMA}
      >
        {formikProps => (
          <Form>
            <Field name='body' placeholder='Enter todo here' />
            <button type='submit'>Add Task</button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map(t => (
          <>
            <li key={t.id}>{JSON.stringify(t.body)}</li>
            <DeleteOutlineIcon />
          </>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
