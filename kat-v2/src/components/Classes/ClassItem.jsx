import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';
import ClassForm from './ClassForm';
import DivisionItem from '../Divisions/DivisionItem';
import CustomButton from '../ui/CustomButton';

function ClassItem({ id }) {
  const DUMMY_DATA = [
    {
      id: 'd1',
      day: '',
      time: '',
      professor: '',
    },
  ];

  const [divisions, setDivisions] = useState(DUMMY_DATA);

  const handleAddDivision = () => {
    const newDivision = {
      id: `d${divisions.length + 1}`,
      day: '',
      time: '',
      professor: '',
    };
    setDivisions([...divisions, newDivision]);
  };

  return (
    <Card>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        강의 {id.toString().substring(1)}
      </h1>
      <div className="space-y-4 md:space-y-6" action="#">
        <ClassForm />
      </div>
      {divisions.map((division) => (
        <DivisionItem key={division.id} id={division.id} />
      ))}
      <div className="space-y-4 md:space-y-6" action="#">
        <CustomButton text="분반 추가" onClick={handleAddDivision} />
      </div>
    </Card>
  );
}

ClassItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ClassItem;
