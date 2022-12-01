import axios from 'axios';
import React, { useState } from 'react';

const RandomActivities = () => {
  const [activites, setActivites] = useState('');

  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='text-2xl font-serif font-bold mt-36'>
        Want A New Activity?
      </h1>
      <div className='border-2 border-white rounded-md p-10 mt-44'>
        <p className='border-2 border-white font-serif p-2 font-bold'>
          {activites}dummy text
        </p>
        <button className='border-2 border-white p-3 rounded-lg mt-10 font-bold font-serif'>
          Click For Activities
        </button>
      </div>
    </div>
  );
};

export default RandomActivities;
