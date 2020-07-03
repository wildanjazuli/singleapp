import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    //   decrement,
    //   increment,
    incrementByAmount,
    // incrementAsync,
    //   selectCount,
} from './loginReducer';
import styles from './Login.module.css';

export function Login() {
    //   const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                Login
      </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Username"
                    //   value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                    placeholder="Username"
                />
                {/* <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button> */}
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Password"
                    type="password"
                    //   value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <div className={styles.between}>
                <div><input type="checkbox" /> Remember Me</div>
                <div>
                    <button
                        className={styles.button}
                        onClick={() =>
                            dispatch(incrementByAmount(Number(incrementAmount) || 0))
                        }
                    >
                        Sign In
                    </button>
                </div>
            </div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Sign In With Facebook
                </button>
            </div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Sign In With Google
                </button>
            </div>
        </div>
    );
}
