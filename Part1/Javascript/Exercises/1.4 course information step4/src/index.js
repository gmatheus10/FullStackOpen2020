import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) =>{
  return(
    <div>
      <h1>
        {course}
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
 
const Content = ({parts}) =>{
  console.log(parts)
      return(
      <div>
       <Part partx ={ parts[0]} />
       <Part partx ={ parts[1]} />
       <Part partx ={ parts[2]} />
      </div>
      )
}

const Total = ({parts}) =>{
  return(
    <div>
      <h3>
        Total of exercise is: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </h3>
    </div>

  )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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
  
  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

