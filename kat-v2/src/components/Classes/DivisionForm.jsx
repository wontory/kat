import React from 'react';
import CustomInput from '../UI/CustomInput';

function DivisionForm() {
  return (
    <div className="space-y-4 md:space-y-6">
      <CustomInput
        label="요일"
        type="text"
        name="day"
        id="day"
        placeholder="월"
      />
      <CustomInput
        label="시간"
        type="text"
        name="time"
        id="time"
        placeholder="123"
      />
      <CustomInput
        label="교수"
        type="text"
        name="professor"
        id="professor"
        placeholder="나관상"
      />
    </div>
  );
}

export default DivisionForm;
