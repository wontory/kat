import React from 'react';
import CustomInput from '../ui/CustomInput';

function ClassForm() {
  return (
    <div className="space-y-4 md:space-y-6">
      <CustomInput
        label="강의명"
        type="text"
        name="title"
        id="title"
        placeholder="컴퓨터공학기초캡스톤디자인"
      />
      <CustomInput
        label="학점"
        type="number"
        name="credit"
        id="credit"
        placeholder="3"
      />
    </div>
  );
}

export default ClassForm;
