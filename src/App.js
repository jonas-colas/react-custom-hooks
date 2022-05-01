import React, {Fragment, useEffect, useState } from 'react';
// import BackwardCounter from './components/counter/BackwardCounter';
// import ForwardCounter from './components/counter/ForwardCounter';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';


function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const { isLoading, error, sendRequest: fetchTasks }  = useHttp({url: process.env.REACT_APP_TASKS_LINK}, transformTasks);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Fragment>
      {/* <ForwardCounter /> */}
      {/* <BackwardCounter /> */}

      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />

    </Fragment>
  );
}

export default App;
