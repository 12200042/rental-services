import "./imageDataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumn } from "../../datasource/ImageDataSource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ImageDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const unsub = onSnapshot(
      collection(db, "VehicleImage"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "VehicleImage", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err)
    }
  };
    const actionColumn = [
        {
            field:"action", 
            headerName:"Action", 
            width:200, 
            renderCell:(params)=>{
                return (
                <div className="cellAction">
                  {/* <Link to = "/Physical/userID" style={{textDecoration:"none"}}>
                    <div className="viewButton">Edit</div> */}
                  {/* </Link> */}
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
                )
            } }
        ]
  return (
    <div className="datatable">
      <div className="datatableTittle">
        Add New Image
        <Link to="/Vehicle/vehicleNew" style={{textDecoration:"none"}} className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumn.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default ImageDataTable