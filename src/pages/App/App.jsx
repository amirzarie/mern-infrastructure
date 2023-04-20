import "./App.css";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

function App() {
  const [user, setUser] = useState(null);
  return (
  <main className="App">
    {
      user ?
      <NewOrderPage />
      :
      <AuthPage />
    }
  </main>
  );
}

export default App;
