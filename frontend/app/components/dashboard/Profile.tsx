import React from "react";

const Profile = () => {
  return (
    <div id="root">
      <section
        id="profile"
        className="min-h-screen bg-neutral-900 text-white p-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Profile Settings</h2>
            <p className="text-neutral-400">
              Manage your account details and preferences
            </p>
          </div>

          <div className="bg-neutral-800/50 rounded-xl p-6 mb-8 border border-neutral-700/30">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-neutral-700 flex items-center justify-center text-2xl font-bold">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 bg-neutral-700 p-2 rounded-full hover:bg-neutral-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-neutral-400">Member since Feb 2024</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    value="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="border-t border-neutral-700 my-8"></div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-700 my-8"></div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Preferences</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Email Notifications</h5>
                      <p className="text-sm text-neutral-400">
                        Receive updates about your account
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium">Two-Factor Authentication</h5>
                      <p className="text-sm text-neutral-400">
                        Add an extra layer of security
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Profile;
