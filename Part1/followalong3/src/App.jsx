import {useState} from 'react'

const App = () => {
    const [value, setValue] = useState(10)

    const btnOnclick = () => {
        return 0;
    }

    return(
        <div>
            {value}
            <Button text="Hello" onClick={btnOnclick}></Button>
        </div>
    )
}


const Button = (props) => {
    return(
    <button onClick = {props.onClick}>
        {props.text}
    </button>
    )
}



export default App
