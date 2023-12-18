import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router";
import UserProvider from "./Contexts/userContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <RouterApp />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
