import {useState} from 'react'

const Display = ({counter}) => <div className="text-center">{counter}</div>;

const ButtonGroup = ({addButtonProps, resetButtonProps, decButtonProps}) => {
    return (
        <div className=" flex gap-3 items-center justify-center">
        <Button  text={addButtonProps.text}  onClick = {addButtonProps.onClick}
        ></Button>

        <Button onClick = {resetButtonProps.onClick}text = {resetButtonProps.text}></Button>

        <Button onClick = {decButtonProps.onClick} text={decButtonProps.text}></Button>

        </div>
    )

}
    
const Button = ({onClick, text}) => 
        <button className="font-bold border rounded-lg px-6 p-1" onClick={onClick}>
            {text}
        </button>;
    


const App = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        console.log('clicked')
        setCounter(counter + 1);

    }

    const handleReset = () => {
        setCounter(0)
    }

    const handleDec = () => setCounter(counter - 1)
    return (
        <div className="flex flex-col gap-2">
        <Display counter = {counter}></Display>
    
        <ButtonGroup addButtonProps={{onClick: handleClick, text: "Add"}} resetButtonProps={{onClick: handleReset, text: "Reset"}} decButtonProps={{onClick: handleDec, text: "Decrement"}}/>

        </div>
        
    )
}

export default App
