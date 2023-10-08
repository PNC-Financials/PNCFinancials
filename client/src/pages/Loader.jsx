import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Adjust the delay (in milliseconds) to match the animation duration
    const delay = 5000; // 3000 milliseconds = 3 seconds (adjust as needed)

    setTimeout(() => {
      navigate('/home'); // Redirect to the "Home" page
    }, delay);
  }, [navigate]);

  return (
    <div>
      <div className="banter-loader">
      <div class="banter-loader">
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
        <div class="banter-loader__box"></div>
    </div>
      </div>
    </div>
  );
};

export default Loader;
