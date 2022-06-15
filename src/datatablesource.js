export const userColumns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field :"user",
    headerName:"User",
    width:300,
    renderCell:(params)=>{
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        );
    },
},
  { field: 'Name', headerName: 'Name', width: 300 },
  { field: 'email', headerName: 'Email', width: 300 },
  
];