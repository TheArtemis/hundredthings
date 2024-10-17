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
        "That you stole the first I love you from me.",
        "Every kiss we have had and we will ever have.",
        "Fart.",
        "When I have to win you back after I've pissed you off.",
        "When you attack me with a random bite.",
        "When I correct your Italian and you start to talk back in Finnish.",
        "How happily you run towards me when you pick me up from the Vantaa airport.",
        "When you hit me with the front double bicep.",
        "When after you get grouceries you yap me the most detailed list of what you got.",
        "How much of a gym bro you are becoming.",
        "How amazing you are for learning my language.",
        "That I get to hold your head when you are tired in the bathroom.",
        "When you try to drag me in the cold 28 degrees water.",
        "That when we watch a movie on facetime you just wait for the link.",
        "How crocheting became your code and when you start I lose you for hours.",
        "That you yap to your plants about your day.",
        "How excited you get whenever there's some tea to spill.",
        "Every single very detailed story time you do.",
        "How soft your lips are when I kiss them.",
        "How when you are really tired you fall asleep while talking.",
        "When you turn into a little gremlin and in ten minutes burn all your energy.",
        "That you become shy when I play romantic.",
        "When you ask me to do your Duolingo.",
        "When you finally look in my eyes and tell me - I've missed you.",
        "How social you have become with my family.",
        "That before going out you change outfits threee times.",
        "The immaculate hate aganist Sweden.",
        "How you always have a - Question: .",
        "The unhinged comebacks I get when I am a sassy boy.",
        "The little apologetic noises that translate to I'm just a girl.",
        "That you stop to pet every cat even tho is gonna kill you.",
        "That you don't like musicals but then you have to sing every song.",
        "How you wanna kill every single manager in my company.",
        "How good of a planner you are.",
        "How cute your laugh is.",
        "How you wanna send a middle finger to every driver that tries to honk at me.",
        "The little happy feet goblin dance you do when you are happy.",
        "How funny you are around my friends.",
        "How revengeful you become when we play videogames.",
        "How much you liked being turned upside down.",
        "That you invented the word Amorettino.",
        "That either we want an icecream or we don't get it.",
        "When you randomly start to sing.",
        "How good it feels when we cuddle.",
        
                 
    ]/* 84 */
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