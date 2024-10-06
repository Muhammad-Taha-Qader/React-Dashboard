
const BrowserUsageComponent = () => {
  return (
    <div className="bg-gray-900 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Browser Usage</h2>
      <div className="flex items-center">
        {/* Donut Chart */}
        <div className="relative w-32 h-32">
          <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 36 36">
            <circle className="text-gray-200" strokeWidth="3.8" fill="none" cx="18" cy="18" r="15.9155"></circle>
            <circle className="text-blue-500" strokeWidth="3.8" strokeDasharray="60, 100" fill="none" cx="18" cy="18" r="15.9155"></circle>
            <circle className="text-yellow-500" strokeWidth="3.8" strokeDasharray="30, 100" fill="none" cx="18" cy="18" r="15.9155"></circle>
            <circle className="text-red-500" strokeWidth="3.8" strokeDasharray="10, 100" fill="none" cx="18" cy="18" r="15.9155"></circle>
          </svg>
        </div>
        {/* Browser Stats */}
        <div className="ml-6">
          <p>Chrome - 4306</p>
          <p>Firefox - 3801</p>
          <p>IE - 1689</p>
        </div>
      </div>
    </div>
  );
};

export default BrowserUsageComponent;
