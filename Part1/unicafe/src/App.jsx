import {useState} from 'react'

const Header = ({headContent}) => {
    return (
        <>
        <h1 className="font-serif font-light text-4xl font-bold text-blue-500">{headContent}</h1>
        </>
    )
}

const Button = ({clickFun, text}) => {
    return (
        <button className="border p-2 hover:text-white hover:bg-blue-500 border-blue-700 rounded-md" onClick={clickFun}>{text}</button>
    )


}

const BtnGroup = ({onClick1, onClick2, onClick3}) => {
    return (
        <div className='flex gap-3'>
        <Button clickFun = {onClick1} text = "Good"/>
        <Button clickFun={onClick2} text="Neutral"/>
        <Button clickFun={onClick3} text = "Bad"/>
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
