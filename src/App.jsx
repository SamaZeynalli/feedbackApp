import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  )
}

export default App