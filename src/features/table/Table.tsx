import { useAppDispatch } from '../../app/hooks';
import { deleteTask } from '../tasks/tasksSlice';
import { toggleModalBox, getData } from '../modalBox/modalSlice';
import './Table.module.css';

export function Table({ data }: any) {
  const dispatch = useAppDispatch();
  const onShowTask = (task: string, points: number) => {
    const data = { task, points };
    dispatch(getData(data));
    dispatch(toggleModalBox());
  };
  const onDeleteTask = (task: string) => {
    dispatch(deleteTask(task));
  };
  return (
    <tbody>
      {data.map((item: any) => {
        return (
          <tr key={item.task}>
            <th>{item.task}</th>
            <th>{item.points}</th>
            <th>
              <button onClick={() => onShowTask(item.task, item.points)}>
                Show
              </button>
              <button onClick={() => onDeleteTask(item.task)}>Delete</button>
            </th>
          </tr>
        );
      })}
    </tbody>
  );
}
