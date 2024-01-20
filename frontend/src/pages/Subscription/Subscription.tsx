import PricingCard from "../../components/Subscription/PricingCard";
import PricingCardPremium from "../../components/Subscription/PricingCardPremium";
import PricingCardStandard from "../../components/Subscription/PricingCardStandard";

const Subscription = () => {
  return(
    <>
    <div
      className="bg-green-50 min-h-[90vh] w-full flex items-center justify-center bg-cover flex-col py-8"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-black text-center">
        <div className="pricing-head flex flex-col">
          <div className="pricing-heading text-5xl font-bold text-green-800">
            Our Friendly Pricing
          </div>
          <div className="pricing-summary text-2xl pt-5 mx-60 mb-10 font-bolder mt-5 tracking-wider text-green-700">
            We designed this product to benefit both farmer and environment.
            <br className="mb-2" />
            View our plan and buy the one which suits you the best.
          </div>
        </div>
      </div>
      <div className="pricing-card w-full flex flex-row px-20 gap-10 justify-center my-10">
        <PricingCard/>
        <PricingCardStandard/>
        <PricingCardPremium/>
      </div>
    </div>
  </>
  );
};

export default Subscription;
