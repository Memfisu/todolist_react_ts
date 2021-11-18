import React from 'react';
import { useSelector } from 'react-redux';
import { dataSelector } from '../selectors';

const SubmitButton = () => {
    const list = useSelector(dataSelector);

    const handleClick = (): void => {
        console.log(list);
    }
    // перемешать список так, чтобы у каждого была своя уникальная пара
    // отправить каждому на емейл его пару
    //

    return (
        <div className="participant">
            <button onClick={handleClick}>Shuffle and send</button>
        </div>
    );
}

export default SubmitButton;