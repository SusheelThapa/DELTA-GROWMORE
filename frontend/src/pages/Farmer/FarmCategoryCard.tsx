interface Props {
  img: string;
  name: string;
  count: string;
}
const FarmCategoryCard = ({ img, name, count }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105 hover:bg-blue-100">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
          {name}
        </h3>
        <p className="text-gray-600">{count} items</p>
      </div>
      <img
        src={img}
        alt={name}
        className="w-24 h-24 object-cover rounded-full ml-4"
      />
    </div>
  );
};

export default FarmCategoryCard;
