import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({course}) =>{
    return(
    <>
        <Header content={course.name}/>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
    </>
    )
}

export default Course
