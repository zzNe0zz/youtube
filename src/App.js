import {BrowserRouter,Route,Routes} from "react-router-dom"
import Main from "./compunemt/Main/Main";
import Videos from "./compunemt/Videos";
import 'antd/dist/reset.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route element ={<Main></Main>} path="/"></Route>
        <Route element ={<Main></Main>} path="/:name"></Route>
        <Route element={<Videos></Videos>} path="/video/:id"></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
