import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  const anecHandler= () =>{
    const newAnecIndex = Math.floor(Math.random()*6)
    setSelected(newAnecIndex)
  }
  const voteHandler = () =>{
    const newPoints = [...points]
    newPoints[selected] +=1
    setPoints(newPoints)
  }
  return (
    <div>
      <Title text = 'Anecdote of the day' />
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button buttonHandler = {anecHandler} text = 'Next anecdote' />
      <Button buttonHandler = {voteHandler} text = 'Vote' />
      <Title text = 'Most voted anecdote' />
      <BestAnecdote points = {points} anecdotes = {props.anecdotes}/>
    </div>
  )
}
const BestAnecdote = (props) =>{
  const pointsToMax =  [...props.points]
  let indexOfMaxPoints = 0
  for(let i = 0; i<pointsToMax.length;i++){
    if(pointsToMax[i] > pointsToMax[indexOfMaxPoints]){
      indexOfMaxPoints = i
    }
  }
  return(
    <div>
      {props.anecdotes[indexOfMaxPoints]} <br></br>
      <br></br>
      has {pointsToMax[indexOfMaxPoints]} votes
    </div>)
}
const Title = (props) =>{
  return(
    <h1>{props.text}</h1>
  )
}
const Button = (props) =>{
  return(
      <button onClick={props.buttonHandler}>{props.text}</button>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)