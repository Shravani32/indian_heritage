import { useNavigate } from "react-router-dom";

const Navbar=()=>{

    const navigate=useNavigate();
    
    const gotoHome=()=>{
        navigate("/");
    }

    const gotoAbout=()=>{
        navigate("/about");
    }

    const gotoDomain=()=>{
        navigate("/domain");
    }

    const gotoContact=()=>{
        navigate("/contact");
    }

    return(
        <div className='navbar'>
            <nav className='nav'>
                <h1 className='nav-head'>Indian Cultural Heritage</h1>
                <ul className='nav-list'>
                    <li><button onClick={gotoHome} className='nav-comp'>Home</button></li>
                    <li><button onClick={gotoAbout} className='nav-comp'>About us</button></li>
                    <li><button onClick={gotoDomain} className='nav-comp'>Domains</button></li>
                    <li><button onClick={gotoContact} className='nav-comp'>Contact us</button></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;