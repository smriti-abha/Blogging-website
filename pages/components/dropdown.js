import React, { useState } from 'react';

const Dropdown = ({ onClick, menuOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className='relative inline-block'>
      <button
        type='button'
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
        onClick={toggleDropdown}
      >
        Dropdown{' '}
        <svg className='w-2.5 h-2.5 ml-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 origin-top-right bg-white rounded-lg shadow-lg w-44 ring-1 ring-black ring-opacity-5'>
          <ul role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100' onClick={closeDropdown}>
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};export default Dropdown;