import Posts from "../../components/Posts";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3">
      <Posts className="col-span-2" />
      <h1 className="bg-red-100">Some thing will surely goes here</h1>
    </div>
  );
};

export default Dashboard;
