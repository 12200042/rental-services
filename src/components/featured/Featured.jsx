import "./featured.scss"
import Gold from '../../images/car1.jpg';
import Silver from '../../images/car2.jpg';
import car from '../../images/car6.jpg';

const Featured = () => {
  return (
    <div className='featured'>The light Vehicles Image in Bhutan
        <div className="item">
            <img
            src={Gold}
            alt=" "
            className="avatar"/>
        </div>
        
        <div className="item">
            <img
            src={Silver}
            alt=" "
            className="avatar"/>
        </div>
        <div className="item">
            <img
            src={car}
            alt=" "
            className="avatar"/>
        </div>
    </div>
        
   
  )
}

export default Featured