

const MyAccountPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">My Account</h2>
          <ul className="text-gray-700">
            <li className="p-2 border-b">Order History</li>
            <li className="p-2 border-b">Profile Settings</li>
            <li className="p-2 border-b">Change Password</li>
            <li className="p-2 border-b">Wishlist</li>
            <li className="p-2 border-b text-red-600 cursor-pointer hover:text-red-800 transition">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyAccountPage;