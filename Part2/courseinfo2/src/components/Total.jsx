const Total = (props) =>{
    let total = props.parts.reduce(((sum, currValue) =>  sum + currValue.exercises), 0);
    return(
    <>
        <p>Number of exercises {total}</p>
    </>
    )

}

export default Total
