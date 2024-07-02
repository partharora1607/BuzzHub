import Feed from "./Feed";
import Header from "./Header";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex mt-4">
        <div className="w-3/12">
          <Sidebar />
        </div>
        <div className="w-6/12 -ml-10">
          <Feed />
        </div>
        <div className="w-3/12 ">
          <Rightbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
