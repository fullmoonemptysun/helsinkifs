import {useState} from 'react'
import './App.css'


const Sidebar = () => {
    let [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    }


    return(

        

        <div className="main">
            <aside className={collapsed?"sidebar collapsed":"sidebar"}>
                <div className="top">
                    
                    <div className="logo"><span className="icon">☮</span><h1>Hello world</h1></div>

                    
                    <button onClick={handleCollapse}>
                +
                </button>
                    
                  
                </div>

                <div className="sideMain"></div>


                <div className="sideBottom"></div>
            </aside>       

            <main>
                <h1>Let's do this</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa ratione labore blanditiis asperiores necessitatibus hic amet praesentium harum non, quas debitis facilis in, neque reprehenderit, quod omnis iusto nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est error ullam? Nobis commodi corporis ab iure reprehenderit quam cum porro illum officiis quae esse omnis tempore assumenda, suscipit perspiciatis.</p>
                <br></br>
                <hr></hr>
                <br></br>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, vitae impedit hic voluptatibus saepe molestias cum molestiae eligendi, optio animi aspernatur numquam eveniet repellendus labore iste id? Vel, sed officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus in, voluptatem temporibus repellendus commodi officiis sapiente, quisquam odit sint hic vitae atque nam itaque. Porro perferendis odit et corporis animi!</p>
            </main>     
        </div>



        

    )
}



export default Sidebar
