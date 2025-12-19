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
      <Header content="Half Stack application development"/>
      <Content name1={part1} num1={exercises1}
      name2={part2} num2 = {exercises2} num3={exercises3} name3={part3}
      />


      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
    </div>
  )
}

const Header = (props) =>{
    return(
    <>
    <h1>{props.content}</h1>
    </>
    )
}

const Content = (props) =>{
    return(
        <>
            <Part name={props.name1} numEx={props.num1}/>
            <Part name={props.name2} numEx={props.num2}/>
            <Part name={props.name3} numEx={props.num3}/>
        </>

    )
}

const Part = (props) =>{
    return(
    <>
        <p>
            {props.name} {props.numEx}
        </p>
    </>
    )
}

const Total = (props) =>{
    return(
    <>
        <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </>
    )

}

export default App
