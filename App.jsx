import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateResume from "./pages/CreateResume";

function App() {
  const [formData, setFormData] = useState(null); // Store user input

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/create"
              element={
                <CreateResume
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
