import React, { useState } from 'react';
import Card from '../UI/Card';
import ClassForm from './ClassForm';
import DivisionItem from './DivisionItem';
import Button from '../Forms/Button';

// eslint-disable-next-line react/prop-types
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
    <Card style={{ minWidth: 400 }}>
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
        <Button text="분반 추가" onClick={handleAddDivision} />
      </div>
    </Card>
  );
}

export default ClassItem;
