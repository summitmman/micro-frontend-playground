import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <div className="main">
        <AppRouter />
      </div>
    </BrowserRouter>
  )
}

export default App
