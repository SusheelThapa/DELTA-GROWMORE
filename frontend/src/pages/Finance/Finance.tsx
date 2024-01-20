import FinanceHero from "../../components/Finance/FinanceHero";

const Finance = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="header text-green-600 text-5xl font-bold w-full text-center my-10">GrowMore for Everyone</div>
        <div>
          <FinanceHero/>
        </div>
        
      </div>

    </>
  );
};

export default Finance;
