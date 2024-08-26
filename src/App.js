import './App.css';
import './styles/card-container.css'
import Cards from './components/Cards';
import Title from './components/Title';
import Header from './components/Header';

const things = [
        "Your beautiful Blue eyes.",
        "The 'ihhh' noises that you make when you are happy.",
        "How grumpyly cute you are in the mornings.",
        "When we playfight in bed.",  
        "How hardworking you are when you go Project Mode.",
        "When you sing me the finnish lullabies.",
        "How competitive you are whenever we play cards (or any game really).",
        "The little happy dance you do when we get food.",
        "The color of your hair at sunsets (and any other time of the day).",
        "How warm you are in the mornings after I come back from the bathroom.", 
        "That you must stop every time you see a dog in the street.",
        "The care you put into making gifts for others.",
        "Crazy frog time.",
        "How caustic your comedy is.",
        "Your beautiful smile.",
        "How good you are at cross seven.",
        "When you reach for my hand to grab on the street.",
        "How protective you are of your ice.",
        "How under the shower you can handle the heat of a hundred suns.",
        "When you become a little sushi roll in bed.",
        "When you make a little home on my chest.",
        "How you get so cold after you eat your ice.",
        "When you spoon me for 5 minutes and then I turn around to spoon you.",
        "When we do nose nose.",
        "How good you sing.",
        "When I lean for a kiss and you lick my mouth.",
        "When you are too lazy to put pants on yourself.",
        "When you are doing my Duolingo and I hear the wrong answer bling.",
        "The infinite yap yap yap.",
        "How at your laziest you make me carry you around like a potato sack.",
        "When you say -Tell me something.",
        "That you always make me finish your food.",
        "That you cannot keep a secret.",
        "When you scratch my head while driving you home from the airport.",
        "How aggressive you get when I try to tickle you.",
        "When you refuse to let me go when we cuddle.",
        "How soft your skin is when I hold your cheeks.",  
        "That out of the blue boob slap.",
        "How good you always smell after we have not seen for a long time.",
        "When we played the guitar together on my bed."
          
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