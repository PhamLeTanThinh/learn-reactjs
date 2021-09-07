import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFetures.propTypes = {
    
};



function CounterFetures(props) {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count);

    const handleIncreaseClick = () => {
        const action = increase(); //action creater tra ve obj action
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }

    return (
        <div>
            Counter : {count}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFetures;