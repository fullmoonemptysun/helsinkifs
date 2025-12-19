// const App = () => {
    
//     const name = 'Peter'
//     const age = 20

  
//     return (
//         <div>
//             <Hello />
//             <Hello name="George" age = {20+12}/>
//             <Hello name="Sally" age = {age}/>
            
//         </div>


//     )
// }

// const Hello = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <p> Hello {props.name}, you are {props.age} years old.</p>

//         </div>
        
//     )
// }

const App = () => {
    const friends = [
        {name: 'Peter', age: 4},
        {name: 'Maya', age: 10},
    ]

    return (
        <>
            <p>{friends}</p>
            
        </>
    )
}

export default App
