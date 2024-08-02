import '../styles/card-container.css';
import Arrow from './Arrow';
import Card from './Card';
import CountdownCard from './CountdownCard';
import { useState, useEffect, useCallback } from 'react';

function Cards({ startDate, things }) {
    const [unlockedCards, setUnlockedCards] = useState([]);
    const [currentThing, setCurrentThing] = useState({ number: null, sentence: null });    

    /* Set the displayed thing for today */
    const getThingForToday = useCallback((startDate, things) => {
        const today = new Date();
        const diffTime = Math.abs(today - new Date(startDate));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        return (diffDays < things.length) ? things[diffDays] : null;
    }, []);

    /* Sets the index for the displayed thing for today */
    const getNumberForToday = useCallback((startDate, things) => {
        const today = new Date();
        const diffTime = Math.abs(today - new Date(startDate));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffDays)
        return (diffDays < things.length) ? (diffDays) : null;
    }, []);

    /* Sets the unlocked things (only when page is loaded - things and startDate nerver change) */
    useEffect(() => {        
        const unlockedThings = getUnlockedThings(things, startDate)        
        setUnlockedCards(unlockedThings);

        console.log(things);
        console.log(unlockedThings);

    }, [startDate, things]);

    /* Updates the current thing */
    useEffect(() => {
        if (unlockedCards.length > 0) {
            const newNumber = getNumberForToday(startDate, unlockedCards);
            const newSentence = getThingForToday(startDate, unlockedCards);
            setCurrentThing({
                number: newNumber,
                sentence: newSentence
            });
        }
    }, [unlockedCards, startDate, getNumberForToday, getThingForToday]);

    /* Handles click for arrow up */
    const handlePrevious = () => {
        let newIndex = Math.max(currentThing.number - 1, 0);
        setCurrentThing({number: newIndex, sentence: unlockedCards[newIndex]});
        console.log(currentThing);
    };
    
    /* Handles click for arrow down */
    const handleNext = () => {
        let desiredIndex = currentThing.number + 1;
        let lastIndex = unlockedCards.length - 1;
        let newIndex = 0        

        if (desiredIndex === lastIndex + 1) {            
            setCurrentThing({number: desiredIndex, sentence: "..."});
            return;
        }
        
        if (desiredIndex > lastIndex + 1)
            return;
        
        newIndex = Math.min(currentThing.number + 1, unlockedCards.length - 1);
        setCurrentThing({number: newIndex, sentence: unlockedCards[newIndex]});
        console.log("click");
    };
    
    const handleReveal = () => {
        let prevCards = unlockedCards;
        console.log(prevCards);
        prevCards.push(things[unlockedCards.length]);
        console.log(prevCards);
        setUnlockedCards(prevCards);
        setCurrentThing({number: currentThing.number, sentence: prevCards[prevCards.length - 1]})        
    }

    return (
        <div className='card-container'>
            <Arrow direction="up" onClick={handlePrevious}/>
            {
                currentThing.number === unlockedCards.length ?
                <CountdownCard number={currentThing.number + 1} onClick={handleReveal}/> :
                <Card number={currentThing.number + 1} thing={currentThing.sentence} />
            }            
            <Arrow direction="down" onClick={handleNext}/>
            
        </div>
    );
}

function getUnlockedThings(things, startDate) {
    console.log(startDate)
    const today = new Date();
    const diffTime = Math.abs(today - new Date(startDate));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const unlockedThings = things.slice(0, diffDays + 1);
    console.log("TODAY:" + today);
    console.log(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime);
    console.log("CIAOOO"+ unlockedThings);
    return unlockedThings;
}
export default Cards;