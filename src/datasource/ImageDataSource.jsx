export const userColumn = [
    {field: "id", headerName: "ID", width: 100},{
        field :"image",
        headerName:"Image",
        width:100,
        renderCell:(params)=>{
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field:"name",
        headerName:"Name of Car",
        width:100,
    }, 
    {
        field:"category",
        headerName:"Category",
        width:100,
    },
    {
        field:"description",
        headerName:"Description",
        width:200,
    }, 
    {
        field:"condition",
        headerName:"Condition",
        width:150,
    },
    {
        field:"price",
        headerName:"Price",
        width:150,
    },
    {
        field:"status",
        headerName:"Status",
        width:100,
    }, 
];

