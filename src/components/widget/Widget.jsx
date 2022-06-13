import "./widget.scss"
// import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhotoCameraBackOutlinedIcon from '@mui/icons-material/PhotoCameraBackOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
const Widget = ({type}) => {
    let data;
    switch(type){
        case"rental":
        data={
            title:"RENTALPAGE",
            isProduct:false,
            // link:"See all users",
            icon:<MenuBookOutlinedIcon
            className="icon"
            style={{
                color:"crimson",
                backgroundColor:"white",
            }}
            />
        };
        break;

        case"user":
        data={
            title:"USERS",
            isProduct:true,
            // link:"See all image",
            icon:<PersonOutlineOutlinedIcon 
                className="icon"
                    style={{
                        backgroundColor:"white",
                        color:"green",
                    }}
                    />
                };
        break;

        case"image":
        data={
            title:"IMAGE",
            isProduct:true,
            // link:"See all video",
            icon:<PhotoCameraBackOutlinedIcon
                className="icon"
                style={{
                    backgroundColor:"white",
                    color:"goldenrod",

                }} />
        };
        break;
        default:
        break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
                {data.isProduct}
            </span>
            {/* <span className="link">{data.link}</span> */}
        </div>

        <div className="right">
            {/* <div className="percentage positive"> */}
                {/* <KeyboardArrowUpOutlinedIcon/>
                20% */}
            {/* </div> */}
            {data.icon}
        </div>
    </div>
  )
}

export default Widget