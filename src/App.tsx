import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
};

export default App;
