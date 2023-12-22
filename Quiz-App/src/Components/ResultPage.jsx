import React, { useState, useEffect } from 'react';
import MainPage from './MainPage';

const ResultPage = ({ theme, setTheme }) => {
  const [localTheme, setLocalTheme] = useState(theme);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const [showMainPage, setMain] = useState(false);

  const score = JSON.parse(localStorage.getItem('score'));
  const result = (score / 10) * 100;
  console.log(score);

  return (
    <>
      {showMainPage ? (
        <MainPage />
      ) : (
        <div>
          <div
            className='container'
            style={{
              backgroundColor: localTheme
                ? 'rgba(255, 255, 255, 0.32)'
                : 'rgba(0, 0, 0, 0.297)',
            }}>
            <div id='results'>
            <p style={{color:  "white"}}>Quiz Results</p>
            <p className='score' style={{color:  "white"}} >{score} out of 10 are correct - {result}%</p>
            <button className='restart' onClick={() => setMain(true)}>
              R E S T A R T
            </button>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default ResultPage;