import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

function App() {
  return (
    <div className="App">
      <Heading 
      name="CrazyKillaMike" 
      age="14" 
      color="red" 
      fontSize="46"
      />
      <Heading 
      name="XanderZone" 
      age="28" 
      color="blue" 
      fontSize="26"
      />
      <Heading 
      name="Sandra Master of the Cube" 
      age="(close to)30"
      fontSize="36"
      />
      <Paragraph 
      content="Hello I am a nice guy"
      />
      <Paragraph 
      content="Hello I am a nice guy"
      />
    </div>
  );
}

export default App;
