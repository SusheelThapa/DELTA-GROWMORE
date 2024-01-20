/**
 * @file Profile.tsx
 * @description Component representing the user profile section.
 */

import susheel from "../../images/susheel.jpg";
import { AiOutlineAim } from "react-icons/ai";
import { MdAppBlocking } from "react-icons/md";
/**
 * @function Profile
 * @description Component representing the user profile section.
 *
 * @returns {TSX.Element} - The Profile component.
 */
const Profile = () => {
  return (
    <div className="w-full mb-8">
      <div className="w-full bg-blue-200 h-[20rem] px-[2.7rem] flex justify-between items-center gap-20">
        <div className="h-[15rem] overflow-hidden rounded-full">
          <img src={susheel} alt="Profile" className="h-full w-full object-cover" />
        </div>
        <div className="info h-3/5 w-[80%] flex flex-col">
          <div className="text-5xl font-bold">Susheel Thapa</div>
          <p className="text-gray-600 text-3xl">Google Developer Associate</p>
          <div className="email flex mt-4 text-gray-600">
            <p className="mx-3">Email:</p>
            <p>susheelthapa@gmail.com</p>
          </div>
          <div className="phone flex text-gray-600">
            <p className="mx-3">Phone:</p>
            <p>+9779840504497</p>
          </div>
          <div className="time flex text-gray-600">
            <p className="mx-3">Current Time:</p>
            <p>4:08 AM</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="btn flex">
          <button className="p-2 mr-5 ml-12 font-semibold text-white bg-red-500 rounded-md">
            Edit Profile
          </button>
          <button className="p-2 border-2 ml-5 font-semibold text-gray-900 bg-green-500 rounded-md">
            Give or Request Feedback
          </button>
        </div>
      </div>

      <div className="bio m-8 ml-12 border-b-2">
        <div className="heading text-gray-700 text-2xl border-b-2 pb-2">
          Professional Bio
        </div>
        <p className="my-5 text-gray-600">
          Susheel Thapa is a seasoned marketing professional with over a decade of experience in developing and executing strategic marketing campaigns. As the Marketing Manager at XYZ Company, he has successfully driven brand awareness and increased customer engagement. Susheel is known for his creativity, analytical skills, and ability to adapt to evolving industry trends. With a proven track record of achieving results, he is passionate about leveraging his expertise to help businesses thrive in today's competitive landscape.
        </p>
      </div>

      <div className="reviews m-8 ml-12 border-b-2">
        <div className="oneliner flex justify-between items-center">
          <h2 className="text-gray-700 text-2xl">My Reviews</h2>
          <p className="text-blue-900 font-medium cursor-pointer">View All</p>
        </div>
        <div className="oneliner flex justify-between items-center mt-2">
          <p className="mb-3 text-gray-600">
            People Operations Self and Manager Check-in (Writing Reviews)
            <button className="bg-green-100 text-green-800 ml-3 px-2 rounded-md">
              ACTIVE
            </button>
          </p>
          <p className="text-blue-900 font-medium cursor-pointer">Perform Reviews</p>
        </div>
      </div>

      <div className="ml-12 flex justify-between mr-8">
        <p className="text-gray-600">
          Degree Annual 360 (Sharing Results)
          <button className="bg-gray-100 text-gray-800 p-1 ml-3 rounded-md">ENDED</button>
        </p>
        <p className="text-blue-900 font-medium cursor-pointer">View Review Packet</p>
      </div>

      <div className="goals border-b-2 m-12 mt-6">
        <h3 className="text-2xl text-gray-700">Goals</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <AiOutlineAim className="text-2xl mr-2" />
          <p>Track new hiring camp</p>
        </div>
      </div>

      <div className="last-div ml-12 flex items-center">
        <MdAppBlocking className="text-2xl mr-2 text-gray-700" />
        <p className="text-gray-600">
          Create a clear & actionable development plan to make it clear what I need to accomplish to receive a promotion next year.
        </p>
      </div>
    </div>
  );
};

export default Profile;
