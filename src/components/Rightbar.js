import Friends from "./Friends";

const Righbar = () => {
  return (
    <div className="fixed top-16 ml-3 mt-4 mr-5 p-4 bg-white rounded-lg shadow-lg h-full overflow-y-auto">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://img.freepik.com/free-psd/open-gift-box-blue-color-with-yellow-ribbon-surprise-present-icon-3d-cartoon-background-illustration_56104-2478.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1717804800&semt=ais_user"
          className="w-10 h-10 rounded-full object-cover"
          alt="Gift Box"
        />
        <h1 className="text-gray-700">
          <span className="font-bold">Pola Foster</span> and
          <span className="font-bold"> 3 other friends</span> have a birthday
          today.
        </h1>
      </div>
      <img
        src="https://plus.unsplash.com/premium_photo-1661726486910-7cfff916caad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Birthday"
        className="w-full shadow-md rounded-md"
      />
      <div className="mt-6">
        <Friends />
      </div>
    </div>
  );
};

export default Righbar;
