import '../styles/card.css'
import { useState , useEffect} from 'react';


function CountdownCard({number, onClick}) {    
    const [revealButton, setRevealButton] = useState(false);
    /* const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        console.log(timeLeft);
        console.log(revealButton);
        
        if(timeRunOut(timeLeft))
            setRevealButton(true);
           

        return () => clearInterval(timer);
    }, [revealButton, timeLeft]); */

    const fakeStartTime = new Date();
    fakeStartTime.setHours(23, 59, 30, 0);
    const [timeLeft, setTimeLeft] = useState(fakeTimeLeft(10));
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(fakeTimeLeft(timeLeft.seconds));
        }, 1000);

        console.log(timeLeft);
        console.log(revealButton);
        
        if(timeRunOut(timeLeft))
            setRevealButton(true);
           

        return () => clearInterval(timer);
    }, [revealButton, timeLeft]);


    return (<div className="card noselect">
                <div className="card-header">
                    <p className="number">#{number}</p>
                </div>
                {
                    !revealButton ? <h1 className="thing">The next thing will be revealed in: {formatCountdown(timeLeft)}</h1> : <div className='reveal-button' onClick={onClick}>REVEAL</div>
                } 
                
            </div>);
}

const formatCountdown = (time) => {
        const format = (num) => (num < 10 ? `0${num}` : num);
        return `${format(time.days)}:${format(time.hours)}:${format(time.minutes)}:${format(time.seconds)}`;
    };

const calculateTimeLeft = () => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setHours(24, 0, 0, 0);
        const timeLeft = tomorrow - now.getTime();
        let time = {};
        if (timeLeft > 0) {
            time = {
                days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
                hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
            };
        } else {
            time = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
        return time;
    }    

    const fakeTimeLeft = (sec) => {   
    let time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: (sec - 1),
    };

    return time;
}

    const timeRunOut = (time) => {
        return (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0);
    }

export default CountdownCard;