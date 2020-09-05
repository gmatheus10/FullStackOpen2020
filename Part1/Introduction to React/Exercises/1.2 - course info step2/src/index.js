import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>

  )
}
const Part = (cont) =>{

 return(
   <div>
    <h2>{cont.part1}</h2>
      <p>Number of exercises: {cont.exercises1}</p>
  </div>
 )
}
const Content = ({part1, exercises1, part2,exercises2,part3,exercises3}) =>{
  return(
    <div>
      <Part part1 = {part1} exercises1 = {exercises1} />
      <Part part1 = {part2} exercises1 = {exercises2} />
      <Part part1 = {part3} exercises1 = {exercises3} />

    </div>

  )
}
const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <h3>
        Total of exercise is: {props.exercises1 + props.exercises2 + props.exercises3}
      </h3>
    </div>

  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course = {course}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Content part1 = {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

