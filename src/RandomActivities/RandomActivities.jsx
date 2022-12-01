import axios from 'axios';
import React, { useState } from 'react';

const RandomActivities = () => {
  const [activites, setActivites] = useState('');

  return (
    <div className='flex flex-col items-center justify-center my-auto h-screen text-center'>
      <div className='border-2 border-white rounded-md p-10 '>
        <p className='border-2 border-white'>asd</p>
        <button className='border-2 border-white p-3 rounded-lg mt-10'>
          Click For Activities
        </button>
      </div>
    </div>
  );
};

export default RandomActivities;
