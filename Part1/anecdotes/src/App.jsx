import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})
  const [mostVoted, setMostVoted] = useState(0)

  const handleNextQuote = () =>{
    let index = Math.floor(Math.random() * 8)
    setSelected(index)

  }

  const handleVote = () => {
    let temp = {...votes}
    temp[selected] += 1
    setVotes(temp)
    console.log(votes)

    let max = 0
    let maxIndex = 0

    for (const [key, value] of Object.entries(temp)){
        if(temp[key] > max){
            max = temp[key]
            maxIndex = key
        }
        
    }

    setMostVoted(maxIndex)
    
  }

  console.log(votes)

  return (
    <div>
        <h1 className="font-bold text-4xl">Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has <strong>{votes[selected]}</strong> votes</p>
      
      <button onClick={handleNextQuote} className="border-2 p-1 hover:bg-black hover:text-white rounded-md">Next Quote</button>
      <button onClick={handleVote} className="border-2 p-1 hover:bg-black hover:text-white rounded-md">Vote</button>

        <h1 className='font-bold text-4xl'>Most voted anecdote</h1>
      <p>{anecdotes[mostVoted]}</p>

      
    </div>
  )
}

export default App
