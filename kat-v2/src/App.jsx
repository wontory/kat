import React from 'react';
import ClassItem from './components/Classes/ClassItem';
import Card from './components/UI/Card';
import SubmitButton from './components/Forms/SubmitButton';

function App() {
  return (
    <form>
      <div className="flex">
        <ClassItem id="1" />
        <Card>강의 추가</Card>
      </div>
      <SubmitButton text="시간표 생성" />
    </form>
  );
}

export default App;
