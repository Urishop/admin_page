import React from "react";
import {
 BrowserRouter,
 Routes,
  Route,
} from "react-router-dom";
// import Login from "./"
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        {/* <Route path="login" element ={<Login />}/> */}
        <Route path="users">
          {/* <Route index element={<Single />} /> */}
          {/* <Route path=":userId" element={<Single />}/>
          <Route path="new" element ={<New />}/> */}
        </Route>
        <Route path="products">
          {/* <Route index element={<List />} /> */}
          {/* <Route path="productId" element ={<Single />}/>
          <Route path="new" element ={<New />}/> */}
        </Route>
      </Route>              
    </Routes>
    </BrowserRouter>
  );
}

export default App;
