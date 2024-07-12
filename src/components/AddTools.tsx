import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddTools: React.FC = () => {
  return (
    <div className="px-2 py-1 bg-sky-200 rounded-full">
      <button className="flex items-center gap-2">
        <FaPlus  className='text-sky-500' size={10}/>
        <span className='text-xs text-gray-500 '>  Add Tools</span>
      </button>
    </div>
  );
};

export default AddTools;
