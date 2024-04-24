// import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { UserAuthContextProvider } from "./context/UserAuthContext";





// function App() {
//   return (
//     <Container style={{ width: "400px" }}>
//       <Row>
//         <Col>
//           <UserAuthContextProvider>
//             <Routes>
//               <Route
//                 path="/home"
//                 element={
//                   <ProtectedRoute>
//                     <Home />
//                   </ProtectedRoute>
//                 }
//               />
//              {/* <Route path="/logout" element={<Logout/>}/> */}
//               <Route path="/" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//             </Routes>
//           </UserAuthContextProvider>
//         </Col>
//       </Row>
//     </Container>
//   );
// }
function App(){
  const shop=localStorage.getItem("token");
  return(
    <Routes>
      {shop && <Route path="/login" exact element={<Login/>}/>}
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/home" exact element={<Home/>}/>
      <Route path="/" exact element={<Navigate replace to="/login"/>}/>
    </Routes>
  );
}

export default App;
