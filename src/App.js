import React from 'react';
function sayHello() {
  alert('You clicked me!');
}
function App() {
  const value = 'World';
  return <div>Hello {value} <button onClick={sayHello}>Go to Stocks Application</button></div>;
}

export default App;
