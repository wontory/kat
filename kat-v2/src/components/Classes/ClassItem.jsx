import React from 'react';
import Card from '../UI/Card';
import ClassForm from './ClassForm';
import DivisionItem from './DivisionItem';
import Button from '../Forms/Button';

// eslint-disable-next-line react/prop-types
function ClassItem({ id }) {
  return (
    <Card>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        강의 {id}
      </h1>
      <div className="space-y-4 md:space-y-6" action="#">
        <ClassForm />
      </div>
      <div className="space-y-4 md:space-y-6" action="#">
        <DivisionItem id="1" />
      </div>
      <div className="space-y-4 md:space-y-6" action="#">
        <Button text="분반 추가" />
      </div>
    </Card>
  );
}

export default ClassItem;
