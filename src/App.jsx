import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/edit-note/:id" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
