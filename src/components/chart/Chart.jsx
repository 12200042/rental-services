import "./chart.scss"
import Gold from '../../images/car3.jpg';
import Silver from '../../images/car4.jpg';
import car from '../../images/car5.jpg';

const Chart = () => {
  return (
    <div className="chart">Heavy Vehicles Image
      <div className="item">
        <img
          src={Gold}
          alt=" "
          className="avatar" />
      </div>

      <div className="item">
        <img
          src={Silver}
          alt=" "
          className="avatar" />
      </div>
      <div className="item">
        <img
          src={car}
          alt=" "
          className="avatar" />
      </div>
    </div>
  )
}

export default Chart