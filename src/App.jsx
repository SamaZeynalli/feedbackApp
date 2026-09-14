import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"
import NewFeedback from "./pages/NewFeedback"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/new-feedback" element={<NewFeedback />} />
    </Routes>
  )
}

export default App