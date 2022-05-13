import React, { useState } from 'react';
import './App.css';
import Layout from './layout';
import { TaskType, TASK_STATUS } from './types';
import TaskCard from './components/task-card';
function App() {
  const [taskData, setTaskData] =  useState<TaskType[]>([
    {
      taskStatus: TASK_STATUS.STATUS_BACKLOG,
      content: "task 1",
      id: 1
    },
    {
      taskStatus: TASK_STATUS.STATUS_BACKLOG,
      content: "task 2",
      id: 2
    },
    {
      taskStatus: TASK_STATUS.STATUS_BACKLOG,
      content: "task 3",
      id: 3
    },
  ])

  const changeTaskStatus = (task_id: number) => {
    let updated: TaskType = {
      taskStatus: 0,
      content: '',
      id: task_id
    }
    for (let i = 0; i < taskData.length; i ++) {
      if (task_id === taskData[i].id) {
        updated = {
          ...taskData[i],
          taskStatus: taskData[i].taskStatus + 1
        }
        taskData.splice(i, 1)
      }
    }
    setTaskData([
      ...taskData,
      updated
    ])
  }
  const titles = [
    "Backlog",
    "In Progress",
    "Done"
  ]
  const cardData = (status: TASK_STATUS) => taskData.filter(item => item.taskStatus === status)
  return (
    <Layout>
      {titles.map((title, ndx) => (
        <TaskCard tasks={cardData(ndx)} taskStatus={ndx} toggleStatus={changeTaskStatus}/>
      ))}
    </Layout>
  );
}

export default App;
