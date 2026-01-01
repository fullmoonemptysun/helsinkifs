import {useState} from 'react'

const DisplayGroup = ({leftDisp, rightDisp}) => {
    return(
        <div className="flex items-center justify-evenly gap-1">
            <Display clickValue = {leftDisp}></Display>
            <Display clickValue = {rightDisp}></Display>
            
        </div>

    )
}

const History = ({allClicks}) =>{
    if(allClicks.length == 0){
        return (
        <Display clickValue = "The app is used by pressing the buttons"/>
        )
    }

    return (
        <Display clickValue = {allClicks.join(' ')}></Display>
    )
}


const Display = ({clickValue}) => <div className="text-center">{clickValue}</div>;

const ButtonGroup = ({addButtonProps, resetButtonProps, decButtonProps}) => {
    return (
        <div className=" flex gap-3 items-center justify-center">
        <Button  text={addButtonProps.text}  onClick = {addButtonProps.onClick}
        ></Button>

        <Button onClick = {resetButtonProps.onClick}text = {resetButtonProps.text}></Button>

        {/* <Button onClick = {decButtonProps.onClick} text={decButtonProps.text}></Button> */}

        </div>
    )

}
    
const Button = ({onClick, text}) => 
        <button className="font-bold border rounded-lg px-6 p-1" onClick={onClick}>
            {text}
        </button>;
    


const App = () => {
    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })

    const [totalClicks, setTotal] = useState(0)

    const [allClicks, setAll] = useState([])

    const handleLeft= () => {
        console.log('clicked')
        setClicks({
            ...clicks,
            left: clicks.left + 1,
            
        });

        setAll([...allClicks, 'L'])
        setTotal(totalClicks + 1)

    }

    const handleRight = () => {
        setClicks({
            ...clicks,
            right: clicks.right + 1
        })

        setAll([...allClicks, 'R'])
        setTotal(totalClicks + 1)
    }

    const handleDec = () => setCounter(counter - 1)
    return (
        <div className="flex flex-col gap-2">
        <DisplayGroup  leftDisp = {clicks.left} rightDisp = {clicks.right} all={allClicks.join(' ')}></DisplayGroup>
     
    
        <ButtonGroup addButtonProps={{onClick: handleLeft, text: "Left"}} resetButtonProps={{onClick: handleRight, text: "Right"}} decButtonProps={{onClick: handleDec, text: "Decrement"}}/>

        <History allClicks = {allClicks}/>

        
        <Display clickValue = {totalClicks}/>
        </div>
        
    )
}

export default App
