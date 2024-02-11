import { Route, Routes } from "react-router-dom";
import Employee from "./components/Employee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Employee />} />
    </Routes>
  );
}

export default App;
