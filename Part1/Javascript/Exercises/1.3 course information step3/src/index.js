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
    <h2>{cont.part1.name}</h2>
      <p>Number of exercises: {cont.part1.exercises}</p>
  </div>
 )
}
 
const Content = ({course,part1,part2,part3}) =>{
  return(
    <div>
      {/*
      <h2>{part1.name}</h2>
      <p>Number of exercises: {part1.exercises}</p>
      */}
      <Part part1 = {part1} />
      <Part part1 = {part2} />
      <Part part1 = {part3} />
      <Total part1 = {part1} part2 = {part2} part3 = {part3} />
    </div>

  )
}
const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <h3>
        Total of exercise is: {props.part1.exercises + props.part2.exercises + props.part3.exercises}
      </h3>
    </div>

  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

