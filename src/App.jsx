import { Routes, Route } from "react-router-dom";

import UserList from "./components/user_list";
import CreateUser from "./components/create_user";

function App() {
  return (
    <Routes>
      <Route path="/user_list" element={<UserList />} />
      <Route path="/create_user" element={<CreateUser />} />
    </Routes>
  );
}

export default App;