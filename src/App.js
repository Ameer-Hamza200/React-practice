// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Welcome from './components/Welcome';
// import NameList from './components/NameList';
import AddUser from './components/Udemy.js/components/AddUsers';
import Counter from './components/Counter';
import Datafetching from './components/Datafetching';
import FocuInput from './components/FocuInput';
import CounterOne from './CounterOne';

function App() {
  return (
    <div className="App">
   <Navbar title="TextUtils"/>
   <Welcome />
   <TextForm heading="Enter text Here"/>
   {/* <NameList /> */}
   <AddUser />
   <Counter />
   <FocuInput />
   < CounterOne />
   <Datafetching />
    </div>
  );
}

export default App;
