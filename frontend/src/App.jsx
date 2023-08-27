import { MainRoute } from "./Pages/MainRoute";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <MainRoute />
      <ToastContainer/>
    </>
  );
}

export default App;
