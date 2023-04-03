import React, { useState } from 'react';
import ClassItem from './components/Classes/ClassItem';
import Button from './components/Forms/Button';
import SubmitButton from './components/Forms/SubmitButton';

function App() {
  const DUMMY_DATA = [
    {
      id: 'c1',
      name: '',
      credit: '',
    },
  ];

  const [classes, setClasses] = useState(DUMMY_DATA);

  const handleAddClass = () => {
    const newClass = {
      id: `c${classes.length + 1}`,
      name: '',
      credit: '',
    };
    setClasses([...classes, newClass]);
  };

  return (
    <form>
      <div className="flex items-start overflow-x-scroll">
        {classes.map((classData) => (
          <ClassItem key={classData.id} id={classData.id} />
        ))}
        <Button text="강의 추가" onClick={handleAddClass} />
      </div>
      <SubmitButton text="시간표 생성" />
    </form>
  );
}

export default App;
