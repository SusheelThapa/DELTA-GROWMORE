import { CiWheat } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaLandmark } from "react-icons/fa";
import { GiBreakingChain } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";

const FinanceHero = () => {
    return (
        <>
            <div className="finance-hero px-[5rem] w-full flex felx-row items-center justify-center">
                <div className=" w-[26rem]">
                    <div className="border-4 border-purple-800 rounded-3xl grid grid-cols-1 gap-4 h-[20rem]">
                        <div className="text-3xl text-green-500 text-center font-bold flex items-center justify-center">
                            GrowMore
                        </div>
                        <div className="text-lg mx-10 text-center h-14">
                            Peer to peer platform to help farmers and merchants.
                        </div>
                        <div className="grid grid-cols-3 px-10 h-[10rem]">
                            <div className="flex justify-center items-center flex-col">
                                <CiWheat className="text-7xl bg-purple-700 text-white rounded-full" />
                                <div className="text-xl font-bold">Inputs</div>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <HiOutlineLightBulb className="text-7xl bg-purple-700 text-white rounded-full p-2" />
                                <div className="text-xl font-bold">Knowledge</div>
                            </div>
                            <div className="flex justify-center items-center flex-col">
                                <MdOutlineAttachMoney className="text-7xl bg-purple-700 text-white rounded-full" />
                                <div className="text-xl font-bold">Funding</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="image">
                    <img src="https://kids.earth.org/wp-content/uploads/2022/04/Untitled-1024-%C3%97-768px-17-900x675.jpg" alt="" className="h-[10rem]"/>
                </div>
                <div className=" w-[42rem] ">
                    <div className="border-4 border-green-600 rounded-3xl flex flex-row h-[20rem]">

                        <div className="w-[50%]">
                            <div className="text-3xl text-orange-500 text-center font-bold flex items-center justify-center my-5">
                                Market
                            </div>
                            <div className="text-lg mx-5 text-center h-14">
                                Supply chain solutions for our farmers.
                            </div>
                            <div className="grid grid-cols-2 px-10 h-[10rem]">
                                <div className="flex justify-center items-center flex-col">
                                    <FaLandmark className="text-7xl bg-orange-700 text-white rounded-full p-3" />
                                    <div className="text-xl font-bold">Processing</div>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <GiBreakingChain className="text-7xl bg-orange-700 text-white rounded-full p-2" />
                                    <div className="text-xl font-bold">Supply Chain</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="text-3xl text-blue-800 text-center font-bold flex items-center justify-center my-5">
                                GrowHub
                            </div>
                            <div className="text-lg mx-10 text-center h-14">
                                Promote organic crops with our social media.
                            </div>
                            <div className="grid grid-cols-2 px-10 h-[10rem]">
                                <div className="flex justify-center items-center flex-col">
                                    <HiOutlineSpeakerphone className="text-7xl bg-blue-800 text-white rounded-full" />
                                    <div className="text-xl font-bold">Marketing</div>
                                </div>
                                <div className="flex justify-center items-center flex-col">
                                    <FaHandshake className="text-7xl bg-blue-800 text-white rounded-full p-2" />
                                    <div className="text-xl font-bold">Sales</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default FinanceHero