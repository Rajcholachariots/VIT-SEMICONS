import Main from "./component/main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    {/* <div className="absolute bottom-2 right-2 ">hwlo</div> */}
    </>
  );
}

export default App;
