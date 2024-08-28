// SpinningCircle.js
import React from 'react';

const SpinningCircle = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-24 h-24 border-4 border-solid border-current border-r-transparent rounded-full animate-spin">
                <span className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    Your Name
                </span>
            </div>
        </div>
    );
};

export default SpinningCircle;
