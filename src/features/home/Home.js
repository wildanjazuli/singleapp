import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from './homeReducer';
import styles from './Home.module.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/RestoreOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationCity';

export function Home() {
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
            <BottomNavigation
                value={1}
                onChange={(event, newValue) => {
                }}
                showLabels
                className={styles.root}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Feed" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Cart" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Profile" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </div>
    );
}
