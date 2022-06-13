import './sidebar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';
// import { async } from '@firebase/util';
import { logout } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    let navigate = useNavigate();

    async function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/home' style={{ textDecoration: "none" }}>
                    <span className="logo">Rental Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleIcon className="icon" />
                            <span className="name">Users</span>
                        </li>
                    </Link>
                    <p className="title">SERVICES</p>
                    <Link to="/vehicle" style={{ textDecoration: "none" }}>
                        <li>
                            <ImageOutlinedIcon className="icon" />
                            <span className="name">Vehicle_Image</span>
                        </li>
                    </Link>
                    <Link to="/ContactUs" style={{ textDecoration: "none" }}>
                        <li>
                            <ContactMailOutlinedIcon className="icon" />
                            <span className="name">Contact_us</span>
                        </li>
                    </Link>
                    <Link to="/Feedback" style={{ textDecoration: "none" }}>
                        <li>
                            <FeedbackOutlinedIcon className="icon" />
                            <span className="name">Feedback</span>
                        </li>
                    </Link>
                    <Link to="/RentDetails" style={{ textDecoration: "none" }}>
                        <li>
                            <BookOutlinedIcon className="icon" />
                            <span className="name">RentDetails</span>
                        </li>
                    </Link>

                    <p className="title">USER</p>
                </ul>
                <ul>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <LogoutIcon className='icon' />
                            <span><button onClick={handleLogout} >Logout</button></span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>

        </div>
    )
}

export default Sidebar