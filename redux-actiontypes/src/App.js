import React from 'react';
import './App.css';
import Counter from './components/Counter'
import CounterDisplay from './components/CounterDisplay'
import Tasks from './components/Tasks'
import TasksDisplay from './components/TasksDisplay'


function App() {
  return (
    <div>
      <Counter />
      <CounterDisplay />
      <Tasks/>
      <TasksDisplay/>
    </div>
  )
}

export default App;
