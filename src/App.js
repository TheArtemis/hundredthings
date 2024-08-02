import './App.css';
import './styles/card-container.css'
import Cards from './components/Cards';
import Title from './components/Title';
import Header from './components/Header';

const things = [
        "Your beautiful Blue eyes.",
        "The 'ihhh' noises that you make when you are happy.",
        "How grumpyly cute you are in the mornings.",
        "When we playfight in bed",  
        "How hardworking you are when you go Project Mode",
        "When you sing me the finnish lullabies",
        "How competitive you are whenever we play cards (or any game really).",             
    ]
let startDate = new Date("2024-07-31");
startDate.setHours(0, 0, 0, 0);

function App() {
    return (
    <div>
        <Header/>
        <Title name="Sonja"/>
        <Cards startDate={startDate} things={things}/>    
    </div>
  );
}

export default App;