import Card from './Components/Card'
import './Styles/Styles.scss'
import data from './data.json';

console.log(data);

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
