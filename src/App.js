import './App.css';
import Header from './components/header/Header';
import RootRouter from './components/router/RootRouter';
import useAuth from './useAuth';

function App() {
  const { handleLogin, handleLogout, isAuthenticated } = useAuth();
  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout}/>
      <RootRouter isAuthenticated={isAuthenticated} onLogin={handleLogin}/>
    </div>
  );
}

export default App;
