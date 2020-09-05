import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>{
  return(
    <div>
      <h1>
        {course.name}
      </h1>
    </div>

  )
}
 const Part = (cont) =>{
 
 return(
   <div>
    <h2>{cont.partx.name}</h2>
      <p>Number of exercises: {cont.partx.exercises}</p>
  </div>
 )
}
 
const Content = (props) =>{
      return(
        <div>
        <Part partx ={ props.parts.parts[0]} />
        <Part partx ={ props.parts.parts[1]} />
        <Part partx ={ props.parts.parts[2]} />
        </div>
      )
}

const Total = (props) =>{
  return(
    <div>
      <h3>
        Total of exercise is: {props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises}
      </h3>
    </div>

  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course = {course} />
      <Content parts = {course}/>
      <Total parts = {course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

