import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewUser from "./pages/new/NewUser";
import List from "./pages/list/List";
import { userInputs } from "./formsource/formSource";
import { Image } from "./pages/home/image/Image"
import { ContactUs } from "./pages/ContactPage/contactUs/ContactUs";
import { useContext } from "react";
import { DarkModeContext } from "./components/context/darkModeContext";
import ImageNew from './pages/new/ImageNew';
import { userInput } from "./formsource/ImageFormSource";
import { ImageList } from './pages/list/ImageList'
import "./components/style/dark.scss"
import {Feedback} from './pages/feedback/Feedback';
import {RentDetails}  from "./pages/rentDetails/RentDetails";

// import { AuthContext } from "./components/context/AuthContext";


function App() {
    const { darkMode } = useContext(DarkModeContext)
    // const { currentUser } = useContext(AuthContext);

    // const RequireAuth = ({ children }) => {
    //   return currentUser ? (children) : <Navigate to="/login" />;
    // };
  
    // console.log(currentUser);


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={
                <List />
              } />
              <Route
                path="new"
                element={<NewUser inputs={userInputs} title="Add New User" />
                }
              />
            </Route>

            <Route path="image">
              <Route index element={
                // <RequireAuth>
                    <Image />
                // </RequireAuth>
                
              } />
            </Route>
            <Route path="ContactUs">
              <Route index element={
                <ContactUs />
              } />
            </Route>
            <Route path="Feedback">
              <Route index element={
                <Feedback/>
              } />
            </Route>
            <Route path="RentDetails">
              <Route index element={
                <RentDetails/>
              } />
            </Route>
            <Route path="vehicle">
              <Route index element={
                <ImageList />
              } />

              <Route path="vehicleNew"
                element={

                  <ImageNew inputs={userInput} title="Add New Image" />

                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
