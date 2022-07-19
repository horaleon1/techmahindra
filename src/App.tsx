import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { list } from './features/tasks/tasksSlice';
import { HeaderTable } from './features/headerTable/HeaderTable';
import { Table } from './features/table/Table';
import { ModalBox } from './features/modalBox/ModalBox';
import { saveTask } from './features/tasks/tasksSlice';
import './App.css';

function App() {
  const dispatch = useAppDispatch();

  const listOfTasks = useAppSelector(list).list;

  const initialState = {
    task: '',
    points: '',
  };

  const [values, setValues] = useState(initialState);

  const onHandleChange = (e: React.MouseEvent) => {
    const result = e.target as any;
    const name = result.name;
    const value = result.value;
    const vals = (val: any) => ({ ...val, [name]: value });
    setValues(vals);
  };

  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    validateForm();
  };

  const onClearData = () => {
    setValues(initialState);
  };

  const onAlert = (message: string) => {
    alert(message);
  };

  const validateForm = () => {
    if (values.task === '') {
      return onAlert('El campo tareas no puede estar vacio.');
    }
    if (values.points === '') {
      return onAlert('El campo puntos no puede estar vacio.');
    }
    if (listOfTasks.find((item: any) => item.task === values.task)) {
      return onAlert('La tarea ya existe, intenta con otro nombre');
    }
    return onProcessData();
  };

  const onProcessData = () => {
    dispatch(saveTask(values));

    onClearData();
  };
  return (
    <div className='App'>
      <ModalBox />
      <div className='header-form'>
        <form>
          <input
            onChange={(e: any) => onHandleChange(e)}
            type='text'
            name='task'
            value={values.task}
            placeholder='Agregar una tarea'
          />
          <select
            name='points'
            onChange={(e: any) => onHandleChange(e)}
            value={values.points}
          >
            <option defaultValue='0'>Seleciona un valor</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='5'>5</option>
            <option value='8'>8</option>
            <option value='13'>13</option>
            <option value='34'>34</option>
            <option value='55'>55</option>
          </select>
          <button
            className='submit'
            type='submit'
            onClick={(e: React.MouseEvent) => onSubmit(e)}
          >
            Agregar tarea
          </button>
        </form>
      </div>
      <div className='tableContainer'>
        {listOfTasks.length === 0 ? (
          <p>No existen tareas</p>
        ) : (
          <table>
            <HeaderTable />
            <Table data={listOfTasks} />
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
