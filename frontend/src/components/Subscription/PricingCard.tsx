import { useState } from "react";

const PricingCard = () => {
    const [viewBenefits, setViewBenefits] = useState(true);
    const features = [
        "Restore up to 1 day streak",
        "Store up to 15 flashcards",
        "Browser Notifications",
    ];
    return (
        <div className="h-[35rem] shadow-md rounded-md w-[22rem] bg-white overflow-hidden flex flex-col my-auto">
            <div className="h-[40%] w-full p-3 text-black flex flex-col justify-center items-center bg-white">
                <div className="text-2xl font-bold mb-1">Basic</div>
                <div className="text-lg mb-3 text-center px-2">
                    For farmers looking forward to taking it slow. Our Basic plan provides you with enough tokens for your monthly use.
                </div>
                <div className="text-lg">
                    NPR <span className="text-3xl font-bold">200</span> / mo
                </div>
            </div>
            <div className="h-[12%] w-full bg-black text-white flex items-center justify-between px-2">
                <span className="text-lg font-medium px-6">View Benefits</span>
                <label className="relative inline-flex items-center cursor-pointer ">
                    <input
                        type="checkbox"
                        checked={viewBenefits}
                        onChange={() => setViewBenefits(!viewBenefits)}
                        className="sr-only peer"
                    />
                    <div
                        className={`w-10 h-5 ${viewBenefits ? "bg-gray-100" : "bg-gray-600"
                            } peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[3px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600`}
                    ></div>
                </label>
            </div>
            <div className="h-[35%]">
                <div className={viewBenefits ? "benefits w-full p-6 text-black justify-between" : "hidden"}>
                    <ul className="list-disc pl-8 pt-3 text-lg">
                        {features.map((feature, index) => (
                            <li key={index} className="mb-1">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="button w-full flex justify-center pt-2">
                <button className="bg-black text-white w-24 h-10 text-lg rounded-md hover:bg-white hover:text-black hover:border-2">
                    Buy Now
                </button>
            </div>
        </div>

    );
};

export default PricingCard;
