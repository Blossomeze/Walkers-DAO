import React, { useState } from 'react';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 text-white lg:w-[49%]">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
        <div className="font-semibold">{question}</div>
        <div className="ml-2">{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div className="mt-2">
          <div className="text-gray-600">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default Question;
