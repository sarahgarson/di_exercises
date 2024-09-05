import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../store/plannerSlice';

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleDateChange = (e) => {
    dispatch(setSelectedDate(e.target.value));
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Calendar;
