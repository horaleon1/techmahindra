import { Fragment } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { isModalBoxOpen } from './modalSlice';
import { ITasks } from '../tasks/tasksSlice';
import { toggleModalBox } from './modalSlice';
import './modalBox.css';

export interface IModalBox {
  values: [ITasks] | any;
  message: string;
}

export function ModalBox() {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(isModalBoxOpen);

  return (
    <Fragment>
      {modal.isModalBoxOpen && (
        <div className='overlay'>
          <div className='modal'>
            <button
              className='close'
              onClick={() => dispatch(toggleModalBox())}
            >
              X
            </button>
            <ul>
              <li>Tarea: {modal.data.task}</li>
              <li>Puntos: {modal.data.points}</li>
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
}
