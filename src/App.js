import React from 'react';
import './App.css';
// import User from './components/User';
// import Card from './components/Card';
import CardWrapper from './components/CardWrapper';

function App() {
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  }
  return (
    <div className="App">
      <header className="App-header">
        <CardWrapper firstName={user.firstName} lastName={user.lastName} />
      </header>
    </div>
  );
}

export default App;
