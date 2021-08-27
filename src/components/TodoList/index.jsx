import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { INPUT_SCHEMA } from '../../utils/validatingSchemas';

function TodoList ({ tasks, setTasks }) {
  const addTask = (values, formikBag) => {
    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    if (values.body) {
      setTasks([...tasks, newTask]);
    }
    formikBag.resetForm();
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
            <Field type='text' name='body' placeholder='Enter todo here' />
            <button type='submit'>Add Task</button>
            <ErrorMessage name='body' component='h5' />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TodoList;
