import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
        <Card title={"Hi"}/>
        <Card text={"how are you?"}/>
        <Card title={"Hi"} text={"how are you?"}/>
        <Card />
    </div>
  );
}

export default App;
