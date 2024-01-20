/**
 * @file ProfileHero.tsx
 * @description Component representing the hero section of the user profile.
 */
import susheel from "../../images/susheel.jpg";
import { AiOutlineAim } from "react-icons/ai";
import { MdAppBlocking } from "react-icons/md";
/**
 * @function ProfileHero
 * @description Component representing the hero section of the user profile.
 *
 * @returns {TSX.Element} - The ProfileHero component.
 */
const ProfileHero = () => {
  return (
    <div>
      <div className="border-2 p-2 m-6 ml-12 mt-16 flex w-1/2">
        <img
          src={susheel}
          alt="susheel"
          className="w-64 h-64 rounded-xl mr-5"
        />
        <div className="text flex-col">
          <h2 className="text-5xl mt-5">Susheel Thapa</h2>
          <p className="text-gray-600 text-3xl">Google Developer Associate</p>
          <div className="email flex mt-10 text-gray-600">
            <p className="m-auto">Email Address:</p>
            <p>susheelthapa@gmail.com</p>
          </div>
          <div className="phone flex text-gray-600">
            <p className="m-auto">Phone number:</p>
            <p>+9779840504497</p>
          </div>
          <div className="time flex text-gray-600">
            <p className="m-auto">Current time:</p>
            <p>
              {/* Current time here */}
              4.08 AM
            </p>
          </div>
        </div>
      </div>
      <div className="btn ">
        <button className="p-2 border-2 mr-5 ml-12 font-semibold text-gray-900">
          Edit Profile
        </button>
        <button className="p-2 border-2 ml-5 font-semibold text-gray-900">
          Give or request feedback
        </button>
      </div>
      <div className="reviews m-8 ml-12 border-b-2">
        <div className="oneliner flex justify-between">
          <h2 className="text-gray-700 text-2xl">My reviews</h2>
          <p className="text-blue-900 font-medium">View all</p>
        </div>
        <div className="oneliner flex justify-between">
          <p className="mb-3">
            People Operations Self and Manager Check in (Writing Reviews){" "}
            <button className="bg-green-100 text-green-800 ml-5 p-1">
              {" "}
              ACTIVE
            </button>
          </p>
          <p className="text-blue-900 font-medium">Perform reviews</p>
        </div>
      </div>

      <div className="ml-12 flex justify-between mr-8">
        <p>
          Degree Annual 360 (Sharing Results)
          <button className="bg-gray-100 text-gray-800 p-1 ml-5">ENDED</button>
        </p>
        <p className="text-blue-900 font-medium">View review packet</p>
      </div>
      <div className="goals border-b-2 m-12 mt-6">
        <h3 className="text-2xl">Goals</h3>
        <div className="flex mt-2">
          <AiOutlineAim className="text-2xl" />
          <p className="mb-3">Track new hiring camp</p>
        </div>
      </div>
      <div className="last-div ml-12">
        <div className="flex">
          <MdAppBlocking className="text-2xl" />
          <p>
            Create a clear & actionable development plan to make it clear what I
            need to accomplish to receive a promotion next year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
