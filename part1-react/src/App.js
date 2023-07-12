//import React from 'react' -> gracias a Babel (JSX) ya no es necesario este import
import './App.css';
import Mensaje from './Mensaje.js'

//siempre se crear componentes fuera de otros componentes
/*const Mensaje = () => {
  return <h1>Hola Mundo!</h1>
}*/
//los modulos siempre en mayuscula la primera letra
const Decription = () => {
  return <p>Esta es la app del curso Fullstack Bootcamp</p>
  
  //Este return es para cuando usas saltos de linea
  /*return (
  <p>
    Esta es la app del curso Fullstack Bootcamp
  </p>
  )*/
}

const App = () => {
  console.log('Hola desde el componente')
  const mensaje = 'Hola mundo'
  const a = 2
  const b = 3
  const now = new Date()
  
  return (
    <div className="App">
      {mensaje + ' evaluación en JSX'}
      <br />
      {a + b}
      <br />
      {+new Date()}
      <br />
      <p>Hola, hoy es {now.toString()}</p>
      <br />

      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>

      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso' />
      <Mensaje color='yellow' message='de React'></Mensaje>
      <h1>Hola Mundo</h1>
      <Decription />
    </div>
  );
}

//en JSX, las {} estara evaluando lo que es
//en JSX, no se puede evaluar objetos -> {new Date()}
//en JSX, no se puede dejar abiertas la etiquetas, siempre hay que cerrarlas

//tambien puede ser
/*
const App = () => {
    <div className="App">
      Hola mundo
    </div>
}
*/

export default App;
