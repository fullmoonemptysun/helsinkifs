import Part from './Part'

const Content = (props) =>{
    return(
        <>
            
                {props.parts.map(part => <Part key={part.id} name={part.name} numEx={part.exercises}/>)}
            
           
        </>

    )
}

export default Content
