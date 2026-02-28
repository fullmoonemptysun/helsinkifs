import {useState} from 'react'
import {Button} from './components/ui/button'

const Header = ({headContent}) => {
    return (
        <>
        <h1 className="font-serif font-light text-4xl font-bold text-blue-500">{headContent}</h1>
        </>
    )
}



const BtnGroup = ({onClick1, onClick2, onClick3}) => {
    return (
        <div className='flex gap-3'>
        <Button onClick={onClick1} className=" text-white bg-green-500"variant="outline">Good</Button>
        <Button onClick={onClick2} className="  bg-yellow-500"variant="outline">Neutral</Button>
        <Button onClick={onClick3} variant="destructive">Bad</Button>


        </div>
    )
} 

const Display = ({goodCount, neutCount, badCount}) => {
    return (
        <>
            <p>Good: {goodCount}</p>
            <p>Bad: {badCount}</p>
            <p>Neutral: {neutCount}</p>
        </>

    )
}


const App = () => {

    

    const [goodCount, setGoodCount] = useState(0)
    const [neutCount, setNeutCount] = useState(0)
    const [badCount, setBadCount] = useState(0)

    const handleGoodClick = () =>{
        setGoodCount(goodCount + 1)
        
    }
    const handleNeutClick = () => {
        setNeutCount(neutCount + 1)
        
    }
    const handleBadClick = () => {
        setBadCount(badCount + 1)
        
    }

 
    


    if(goodCount == 0 && badCount == 0 && neutCount == 0){
            return(
        <div className='flex items-center justify-center flex-col gap-3'>
        <Header headContent="Please provide your Feedback."/>



        <BtnGroup onClick1={handleGoodClick} onClick2={handleNeutClick} onClick3={handleBadClick} />
        
        <p>No Feedback provided.</p>

        </div>
        
    )
    }
    

    return (

        <div className='flex items-center justify-center flex-col gap-3'>
        <Header headContent="Please provide your Feedback."/>



        <BtnGroup onClick1={handleGoodClick} onClick2={handleNeutClick} onClick3={handleBadClick} />
        

        <Display goodCount={goodCount} neutCount={neutCount} badCount={badCount}></Display>
        <table>
            <tbody>
                <tr>
                    <td>All: </td>
                    <td>{goodCount + neutCount + badCount}</td>
                </tr>
                <tr>
                    <td>Average: </td>
                    <td>{((goodCount * 1) + (neutCount * 0) + (badCount * -1))/(goodCount + neutCount + badCount)}</td>
                </tr>
                <tr>
                    <td>Positive: </td>
                    <td>{(goodCount/(goodCount + badCount + neutCount)) * 100}%</td>
                </tr>
            </tbody>
        </table>
        </div>
        
    )

}






export default App
