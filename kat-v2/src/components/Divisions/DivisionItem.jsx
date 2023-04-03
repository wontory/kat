import React from 'react';
import PropTypes from 'prop-types';
import DivisionForm from './DivisionForm';

function DivisionItem({ id }) {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          분반 {id.toString().substring(1)}
        </h1>
        <div className="space-y-4 md:space-y-6" action="#">
          <DivisionForm />
        </div>
      </div>
    </div>
  );
}

DivisionItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DivisionItem;
