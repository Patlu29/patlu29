import { Link } from "react-router-dom"; 
import './Home.css'
function Home(){
    return(
        <>
        <nav className="rainbow-border">
            <button><Link to="/Aboutus" className="link">Aboutus</Link> </button>
            <button><Link to="/StopWatch" className="link">Stop watch</Link></button>
            <button><Link to="/Layout" className="link">Home</Link></button>
        </nav>
        <div className="Home">
            <h1 className="tools1">....Welcome....</h1>
            <h2 className="tools">Tools im used 👇</h2>
            <img src="https://i.ytimg.com/vi/CqNO8pRGFco/maxresdefault.jpg" alt="used tools" className="homeimg"/>
        </div>
        </>
    )
};

export default Home;