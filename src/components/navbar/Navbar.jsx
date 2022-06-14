import "./navbar.scss"
import Diamond from '../../images/download.jpg';
// import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from "../context/darkModeContext"

import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="search..." />
          <SearchIcon />
        </div> */}
        <div className="search">
          <h2>WelcomeToVRS</h2>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img
              src={Diamond}
              alt=" "
              className="avatar" />
          </div>

        </div>
      </div>

    </div>

  )
}

export default Navbar
