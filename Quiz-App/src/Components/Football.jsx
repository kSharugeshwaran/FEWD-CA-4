import React, { useEffect } from 'react'
import { useState } from 'react';
import MainPage from './MainPage';
import ResultPage from './ResultPage';
import App from '../App';
export const Football = ({theme,setTheme}) => {
   const [localTheme, setLocalTheme] = useState(theme)
    useEffect(() => {
      setLocalTheme(theme);
    }, [theme]);

  const[high, setHigh] = useState(() => {
    return false
  })
    const[showMain,setShowMain] = useState(() => {
        return false
    })
    const [n,setN] = useState(() => {
        return 1
    })
    const [selectedOption,setSelectedOption] = useState(() => {
        return null
    })
    const [score, setScore] = useState(() => {
        return 0
    })
    const [showResult, setResult] = useState(() => {
        return false
    })
   
    

    // useEffect( () => {
    //     console.log(score)
    // },[score])
    
    const footballQuestions = [
        {
          question: 'Which country won the FIFA World Cup in 2018?',
          options: ['France', 'Brazil', 'Germany', 'Argentina'],
          correctAnswer: 'France',
        },
        {
          question: 'Who is the all-time top scorer in the UEFA Champions League?',
          options: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul', 'Robert Lewandowski'],
          correctAnswer: 'Cristiano Ronaldo',
        },
        {
          question: 'In which city is the famous football club FC Barcelona located?',
          options: ['Madrid', 'Barcelona', 'London', 'Milan'],
          correctAnswer: 'Barcelona',
        },
        {
          question: 'Which player is known as "The Egyptian King"?',
          options: ['Mohamed Salah', 'Sadio Mané', 'Roberto Firmino', 'Virgil van Dijk'],
          correctAnswer: 'Mohamed Salah',
        },
        {
          question: 'What is the nickname of the Brazilian national football team?',
          options: ['Seleção', 'Azzurri', 'La Roja', 'Die Mannschaft'],
          correctAnswer: 'Seleção',
        },
        {
          question: 'Which country hosted the 2014 FIFA World Cup?',
          options: ['Brazil', 'Germany', 'South Africa', 'Russia'],
          correctAnswer: 'Brazil',
        },
        {
          question: 'Who won the Ballon d\'Or in 2017?',
          options: ['Lionel Messi', 'Cristiano Ronaldo', 'Robert Lewandowski', 'Virgil van Dijk'],
          correctAnswer: "Cristiano Ronaldo",
        },
        {
          question: 'Which club did Zinedine Zidane play for in the majority of his career?',
          options: ['Real Madrid', 'AC Milan', 'Manchester United', 'Juventus'],
          correctAnswer: 'Juventus',
        },
        {
          question: 'In which year did the Premier League begin?',
          options: ['1988', '1992', '1996', '2000'],
          correctAnswer: '1992',
        },
        {
          question: "Who is the Greates Of All Time?",
          options: ['Pele', 'Cristiano Ronaldo', 'Lionel Messi', 'Maradona'],
          correctAnswer: 'Cristiano Ronaldo',
        },
      ];
      const quizQuestions = footballQuestions[n]
      const progress = (selected) => {
        const answer = quizQuestions.correctAnswer;
        setSelectedOption(selected);
        setScore((prev) => (selected === answer ? prev + 1 : prev));
        setSelectedOption(null);
      
        if (n === footballQuestions.length - 1) {
          setResult(true);
          localStorage.setItem('score', JSON.stringify(score + 1));
        } else {
          setN((prev) => (prev < 9 ? prev + 1 : 0));
        }
      };
   
      
  
      
  return (
    <>{showResult ? <ResultPage theme={theme} setTheme={setTheme}/> : showMain? <MainPage/> :(
        <div>
        <div className='container' style={{backgroundColor: localTheme? "rgba(255, 255, 255, 0.32)" : "rgba(0, 0, 0, 0.297)"}}>
            <p style={{color: localTheme ? (high ? "yellow":"white"): high?"yellow":"black"}}>{quizQuestions.question}</p>
        <div className='grid'>
        {quizQuestions.options.map((option, i) => (
  <button
    key={i}
    className={`options ${selectedOption === option ? 'selected' : ''}`}
    onClick={() => progress(option)}
  >
    {option}
  </button>
))}
        </div>
            <button className='high' onClick={() => {
              setHigh(!high)
            }}>{high ? "REMOVE HIGHLIGHT" : "HIGHLIGHT TEXT"}</button>

            
        </div>
    </div>
    )}
        
    </>
    
  )
}
