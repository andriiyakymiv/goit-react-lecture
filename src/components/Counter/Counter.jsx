import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
    const [counter, setCounter] = useState(100);
    const [step, setStep] = useState(1);

    const handleMinusClick = () => {
        setCounter(counter - step);
    };
    const handlePlusClick = () => {
        setCounter(counter + step);
    };
    const handleResetClick = () => {
        setCounter(0);
        setStep('');
    };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
            <h1>{counter}</h1>
            <input value={step} onChange={(event) => setStep(Number(event.target.value))}/>
        <div className={s.flex}>
          <button onClick={handleMinusClick} className='btn'>minus</button>
          <button onClick={handleResetClick} className='btn'>reset</button>
          <button onClick={handlePlusClick} className='btn'>plus</button>
        </div>
      </div>
    </div>
  );
};