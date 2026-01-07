const App = () => {
  const course = {id: 1, name: 'Half Stack application development', parts:
[{name: 'Fundamentals of React', exercises: 10, id:1},
{name: 'Using props to pass data', exercises: 7, id:2},
{name: 'Rendering collections', exercises: 8, id:4},
{name: 'State of a component', exercises: 14, id:3},

]
  }

  return (
    <Course course = {course}/>
  )
}

const Course = ({course}) =>{
    return(
    <>
        <Header content={course.name}/>
        <Content parts={course.parts}></Content>
    </>
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
            
                {props.parts.map(part => <Part key={part.id} name={part.name} numEx={part.exercises}/>)}
            
           
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
    let total = props.pts[0].exercises + props.pts[1].exercises + props.pts[2].exercises
    return(
    <>
        <p>Number of exercises {total}</p>
    </>
    )

}

export default App
