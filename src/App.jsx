import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Catalog from './pages/Catalog'
import GestureDetail from './pages/GestureDetail'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Quiz from './pages/Quiz'
import Recognition from './pages/Recognition'
import Profile from './pages/Profile'
import Accessibility from './pages/Accessibility'
import Auth from './pages/Auth'
import Test from './Test'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/gesture/:slug" element={<GestureDetail />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/modules/:slug" element={<ModuleDetail />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/recognition" element={<Recognition />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}
