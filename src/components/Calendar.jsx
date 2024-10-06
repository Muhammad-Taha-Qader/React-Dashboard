
const CalendarComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Calendar</h2>
      <div className="text-center">
        {/* Calendar Structure */}
        <div className="flex justify-between items-center mb-2">
          <button className="text-gray-600">&laquo;</button>
          <span className="text-lg font-medium">October 2024</span>
          <button className="text-gray-600">&raquo;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-gray-700">
          {/* Days of the week */}
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>

          {/* Dates of the month */}
          <div className="text-gray-300">29</div><div className="text-gray-300">30</div>
          <div className="bg-blue-500 text-white rounded-full w-full h-10 flex items-center justify-center">1</div>
          <div>2</div><div>3</div><div>4</div><div>5</div>
          <div>6</div><div className="text-blue-500">7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
          {/* More dates */}
          {/* You can fill in the rest similar to the provided design */}
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
