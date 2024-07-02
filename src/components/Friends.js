import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Friends = () => {
  const friends = [
    { name: "John Doe", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    {
      name: "Jane Smith",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Alice Johnson",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Bob Brown",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Charlie Davis",
      img: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
      name: "Daisy Miller",
      img: "https://randomuser.me/api/portraits/women/89.jpg",
    },
  ];

  return (
    <div className="ml-3 p-4 rounded-lg shadow-lg h-full overflow-y-auto mb-20">
      <h1 className="text-lg font-semibold mb-4">Online Friends:</h1>
      <div>
        <ul>
          {friends.map((friend, index) => (
            <li key={index} className="flex items-center space-x-3 my-4">
              <div className="relative">
                <img
                  src={friend.img}
                  className="w-10 h-10 rounded-full bg-cover hover:ring-4"
                  alt={friend.name}
                />
                <FiberManualRecordIcon
                  className="absolute bottom-0 right-0 text-green-500"
                  style={{ fontSize: "0.8rem" }}
                />
              </div>
              <h1 className="text-gray-800 cursor-pointer">{friend.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Friends;
