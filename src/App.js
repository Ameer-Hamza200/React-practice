// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Welcome from './components/Welcome';
// import NameList from './components/NameList';
import AddUser from './components/Udemy.js/components/AddUsers';

function App() {
  return (
    <div className="App">
   <Navbar title="TextUtils"/>
   <Welcome />
   <TextForm heading="Enter text Here"/>
   {/* <NameList /> */}
   <AddUser />
    </div>
  );
}

export default App;
