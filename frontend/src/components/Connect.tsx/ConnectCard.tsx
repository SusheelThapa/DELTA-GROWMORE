interface Props {
    cardData: {
        companyName: string;
        tags?: string[];
        companyDesc: string;
        img: string;
    };
}


const ConnectCard = ({ cardData }: Props) => {
    return (
        <div className="card w-[62rem] h-[15rem] rounded-full flex flex-row shadow-xl border my-8 mx-16rem bg-white">
            <div className="h-full w-[25%] flex justify-center items-center mr-5">
                <img src={cardData.img} alt="" className='rounded-full h-[90%]' />
            </div>
            <div className="h-full w-[65%] flex flex-col mt-3">
                <div className="company-name text-3xl font-bold">{cardData.companyName}
                    <hr />
                </div>
                <div className="company-tags flex justify-row gap-5 h-[16%] mt-3">
                    {
                        cardData.tags.map((tag) => (
                            <button key={tag} className="bg-green-500  w-[7rem] h-[2rem] rounded-lg">{tag}</button>
                        ))
                    }
                </div>
                <div className="desc h-[35%]">
                    {cardData.companyDesc}
                </div>
                <div className="button h-[25%]">
                    <button className="bg-blue-500 w-[10rem] text-xl h-[2.5rem] rounded-lg text-white">Connect</button>
                </div>
            </div>
        </div>
    )
}

export default ConnectCard