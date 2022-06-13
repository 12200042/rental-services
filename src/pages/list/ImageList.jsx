import "./imageList.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar";
import ImageDataTable from "./../../components/datatable/ImageDataTable";

export const ImageList = () => {
  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
     <Navbar/> 
     <ImageDataTable/>
   
    </div>
    </div>
  )
}



