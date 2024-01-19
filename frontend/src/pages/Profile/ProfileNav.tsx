
import susheel from "../../images/susheel.jpg";

const ProfileNav = () => {
  return (
    <>
      <div className="flex w-screen max-h-24 bg-red-200 p-2 mb-8">
        <div className="flex m-10 mt-4 w-full shadow-md h-fit p-2 bg-white rounded-xl">
          <img
            src={susheel}
            alt="susheel"
            className="h-20 w-20 rounded-full mr-6 ml-4"
          />
          <div className="mt-3">
            <h2 className="text-2xl font-medium">Susheel Thapa</h2>
            <p className="text-gray-600 text-xl">Google Developer Associate</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
