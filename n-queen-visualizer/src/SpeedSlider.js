// src/SpeedSlider.js

import React from 'react';
import './App.css';

const SpeedSlider = ({ speed, setSpeed }) => {
    return (
        <div>
            <label>
                Speed Control (ms):
                <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                />
            </label>
        </div>
    );
};

export default SpeedSlider;
