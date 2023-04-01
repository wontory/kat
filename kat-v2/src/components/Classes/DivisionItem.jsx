import React from 'react';
import DivisionForm from './DivisionForm';

// eslint-disable-next-line react/prop-types
function DivisionItem({ id }) {
  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        분반 {id}
      </h1>
      <div className="space-y-4 md:space-y-6" action="#">
        <DivisionForm />
      </div>
    </div>
  );
}

export default DivisionItem;
