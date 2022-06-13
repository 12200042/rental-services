export const userColumns = [
    {field: "id", headerName: "ID", width: 100},{
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
    {
        field:"username",
        headerName:"Username",
        width:400,
    },
    {
        field: "displayName",
        headerName:"DisplayName",
        width:300,
    },
    {
        field:"email",
        headerName:"Email",
        width:400,
    },
    {
        field: "phone",
        headerName:"Phone",
        
    },
    {
        field: "address",
        headerName:"Address",
    },

    {
        field:"status",
        headerName:"Status",
        width:200,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}</div>
            );
        },
    },

    
    
];

export const userRows = [
    {
        id:1,
        username:"Deki Yangden",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"active",
        email:"12200042.gcit@rub.edu.bt",
        age:21,
    },
    {
        id:2,
        username:"Sujata Rai",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"passive",
        email:"12200086.gcit@rub.edu.bt",
        age:21,
    },

    {
        id:3,
        username:"Sonam Wangchuk",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"pending",
        email:"12200083.gcit@rub.edu.bt",
        age:21,
    },
    {
        id:4,
        username:"Hang subba",
        img:"https://images.pexels.com/photos/20787/pexels-photo.jpg? auto=compress&cs=tinysrgb&h=350",
        status:"active",
        email:"12200096.gcit@rub.edu.bt",
        age:21,
    },
]