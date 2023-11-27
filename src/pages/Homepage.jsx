import { useState } from 'react'
import '../App.css'
import HeaderH from '../components/HeaderH.jsx';
import myGif from '../AwesomeDance.gif';





const Homepage = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        // 👇️ refers to the gif element
        setCount((count) => count + 1);
    };
    const [isOpen, setOpen] = useState(false)



    return (
        
    <>
        
        <div>
            <HeaderH/>
            {/* <Hamburger rounded toggled={isOpen} toggle={setOpen} /> */}
            <b id="b1"> Welcome to my React Portfolio Site. My name navigates to a blog about traveling to Tokyo! Be sure to check out my Linkedin at the bottom </b>
            <div>
                <a target="_blank"> <img src={myGif} className='logo' alt="my-gif" onClick={handleClick}/> </a>
            </div>
            <h3>{count}</h3>
            <h1>Click on Ninja Doge to charge his powers</h1>
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div> */} 
        </div>
        
        
    </>
    )
}



export default Homepage;