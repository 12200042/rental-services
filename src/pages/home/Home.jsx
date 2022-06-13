import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import './home.scss'
import Silver from '../../images/gyalposhing.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="rental" />
          <Widget type="user" />
          <Widget type="image" />
        </div>
        <div >
          <h2 className="rental">The Rental Service is available in Gyalposhing region</h2>

        </div>
        <div className="image">
          <img
            src={Silver}
            alt=" "
            className="avatars" />
        </div>
        <h2 className="below">Here We can upload the details of vehicles that can be rented </h2>
        <Link to="/image" style={{ textDecoration: "none" }}>

          <h4 className="goToImage">Rental Images</h4>
        </Link>
        <div className="link">For more the above button</div>
      </div>
    </div>
  )
}

export default Home