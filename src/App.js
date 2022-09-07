// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
   <Navbar title="TextUtils"/>
   <Welcome />
   <TextForm heading="Enter text Here"/>
    </div>
  );
}

export default App;
