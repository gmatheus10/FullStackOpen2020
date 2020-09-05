import React, { useState } from 'react'
import ReactDOM from 'react-dom'

////////////////////////////////////////////////////////////////////////////
const Button = (props) =>{
  return(
   <button onClick={props.handleClick} >{props.buttonText}</button>
  )
}
////////////////////////////////////////////////////////////////////////////////////////////////////
const Titles = (props) =>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
/////////////////////////////////////////////////////////////////////////////////////////////////
const FeedBackStatistics = (props) =>{
  return(
  <div>{props.text}: {props.value} </div>
  )
}
{/** //////////////////////////////////////////////////////////////////////////////////////// */}


//////////////////////////////////////////////////////////////////////////////////////////////
const App = (props) => {
  ////////////////Titles////////////////////////////
  const title1 = "Give us your feedback"
  const title2 = "Statistics"

  /////////////States/////////////////////////////////
  const [clicks, setClicks] = useState({good:0,neutral:0,bad:0,all:0, average:0, positive:0})

  ///////////////Handlers/////////////////////////////
  const goodHandler = () =>{
    const newGood = clicks.good + 1
    const newAll = clicks.all +1
    const newClicks ={
      ...clicks, good: newGood, all: newAll, average: (newGood - clicks.bad) / newAll , positive: (newGood/newAll) * 100
    }
    return(
      setClicks(newClicks)
    )
  }
  const neutralHandler = () =>{
    const newAll = clicks.all +1
    const newClicks ={
      ...clicks, neutral: clicks.neutral +1, all: newAll, average:(clicks.good - clicks.bad)/newAll, positive: (clicks.good/newAll) * 100
    }
    return(
      setClicks(newClicks)
    )
  }
  const badHandler = () =>{
    const newBad = clicks.bad +1
    const newAll = clicks.all +1
    const newClicks ={
      ...clicks, bad: newBad, all: newAll, average:(clicks.good - newBad)/newAll, positive: (clicks.good/newAll) * 100
    }
    return(
      setClicks(newClicks)
    ) 
  }
  if(clicks.all === 0 ){
    return(
      
      <div>
      <Titles title = {title1}/>
      <Button handleClick = {goodHandler} buttonText = 'Good' />
      <Button handleClick = {neutralHandler} buttonText = 'Neutral' />
      <Button handleClick = {badHandler} buttonText = 'Bad' />
      <Titles title = {title2}/>
      No feedback given
      </div>
    )
  }
  return (
    <div>
      <Titles title = {title1}/>
      <Button handleClick = {goodHandler} buttonText = 'Good' />
      <Button handleClick = {neutralHandler} buttonText = 'Neutral' />
      <Button handleClick = {badHandler} buttonText = 'Bad' />
      <Titles title = {title2}/>
      <FeedBackStatistics text = 'Good' value = {clicks.good} />
      <FeedBackStatistics text = 'Neutral' value = {clicks.neutral} />
      <FeedBackStatistics text = 'Bad' value = {clicks.bad} />
      <FeedBackStatistics text = 'Average' value = {clicks.average} />
      <FeedBackStatistics text = 'Positive' value = {clicks.positive} /> 
    </div>
  )
}

ReactDOM.render(<App/>, 
  document.getElementById('root')
)