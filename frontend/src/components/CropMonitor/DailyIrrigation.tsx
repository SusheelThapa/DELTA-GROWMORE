const DailyIrrigation = () => {
    const percent = 80;

    return (
        <div className="h-[10rem] bg-white rounded-xl p-3">
            <div className="text-2xl w-full text-center mb-4">Daily Irrigation</div>
            <hr />
            <div className="text-xl w-full text-center mt-2">Output</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-5">
                <div className={`bg-green-600 h-2.5 rounded-full w-[${percent}%]`}></div>
            </div>

        </div>
    );
};

export default DailyIrrigation;
