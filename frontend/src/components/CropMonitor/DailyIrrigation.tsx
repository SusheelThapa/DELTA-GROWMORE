/**
 * Displays the daily irrigation level in a progress-bar style.
 * The percentage of the bar filled is determined by the `percent` variable.
 *
 * @returns {TSX.Element} The DailyIrrigation component.
 */

const DailyIrrigation = () => {
  // The percentage of irrigation completion.
  const percent = 80;

  return (
    <div className="h-[10rem] bg-white rounded-xl p-3">
      <div className="text-2xl w-full text-center mb-4">Daily Irrigation</div>
      <hr />
      <div className="text-xl w-full text-center mt-2">Output</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-5">
        {/* Progress bar to represent the irrigation level */}
        <div
          className={`bg-green-600 h-2.5 rounded-full w-[${percent}%]`}
        ></div>
      </div>
    </div>
  );
};

export default DailyIrrigation;
