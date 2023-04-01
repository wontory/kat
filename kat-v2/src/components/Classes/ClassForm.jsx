import React from 'react';
import TextInput from '../Forms/TextInput';

function ClassForm() {
  return (
    <div className="space-y-4 md:space-y-6">
      <TextInput
        label="강의명"
        type="text"
        name="title"
        id="title"
        placeholder="컴퓨터공학기초캡스톤디자인"
        required="true"
      />
      <TextInput
        label="학점"
        type="number"
        name="credit"
        id="credit"
        placeholder="3"
        required="true"
      />
    </div>
  );
}

export default ClassForm;
