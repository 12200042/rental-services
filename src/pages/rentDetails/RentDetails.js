import "./rentDetails.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect} from "react";
import { db } from "../../firebase";
import { collection, doc, onSnapshot, deleteDoc,  } from "firebase/firestore";
import { Button } from "react-bootstrap";


export const RentDetails = () => {
 

  const [users, setUsers] = useState([{ name: "Loading...." }]);
  const usersCollectionRef = collection(db, "Reserved");

  const deleteUser = async (id) => {
    const userDoc = doc(db, "Reserved", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const unsub = onSnapshot(usersCollectionRef, (snapshot) =>
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
    return unsub;
  });

  return (
    <div className='list'>
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className='rentDetails'> RentDetails </div>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name of Vehicle</th>
                <th>Category</th>
                <th>Email_id</th>
                <th>Phone Number</th>
                <th>Condition</th>
                <th>Address</th>
                <th>Price</th>
                <th>start-date</th>
                <th>return-date</th>
                <th>Delete</th>
            </tr>
            
        </thead>
        <tbody>
          {users.map((user,index) => (
              <tr key={user.id}>
                <th style={{textAlign: "center",paddingTop:14.5,paddingBottom:14.5}}>{index + 1}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.name}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.category}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.email}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.number}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.condition}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.address}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.price}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.returnDate}</th>
                <th className="pding" style={{textAlign: "center"}} >{user.startDate}</th>
                
                <td className="pding-l">
                <Button className="button"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </Button>
                 
                </td>
              </tr>
            ))}
          </tbody>
      </table>

    </div>
  </div>
  )
}
