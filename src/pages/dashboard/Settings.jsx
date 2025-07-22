import { useState } from 'react';

const Settings = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    setNotification({
      type: 'success',
      message: 'Profile updated successfully!',
    });
    setIsEditing(false);
    setTimeout(() => setNotification(null), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setNotification({
        type: 'error',
        message: 'New passwords do not match!',
      });
      return;
    }
    // TODO: Implement password change logic
    setNotification({
      type: 'success',
      message: 'Password changed successfully!',
    });
    setPasswords({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logging out...');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Account Settings</h2>

      {notification && (
        <div
          className={`p-4 rounded-md ${notification.type === 'success'
            ? 'bg-success/10 text-success'
            : 'bg-error/10 text-error'
            }`}
        >
          {notification.message}
        </div>
      )}

      {/* Profile Section */}
      <section className="bg-surface rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Profile Information</h3>
        <form onSubmit={handleProfileUpdate} className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src={profileData.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <label className="block text-sm font-medium mb-2 text-text-primary">
                Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                className="block w-full text-sm text-text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-text-primary">Name</label>
              <input
                type="text"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
                disabled={!isEditing}
                className="input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-text-primary">Email</label>
              <input
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData({ ...profileData, email: e.target.value })
                }
                disabled={!isEditing}
                className="input"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="btn btn-outline text-sm"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
            {isEditing && (
              <button
                type="submit"
                className="btn btn-primary text-sm"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Password Section */}
      <section className="bg-surface rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Change Password</h3>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-text-primary">
              Current Password
            </label>
            <input
              type="password"
              value={passwords.currentPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, currentPassword: e.target.value })
              }
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-text-primary">New Password</label>
            <input
              type="password"
              value={passwords.newPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, newPassword: e.target.value })
              }
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-text-primary">
              Confirm New Password
            </label>
            <input
              type="password"
              value={passwords.confirmPassword}
              onChange={(e) =>
                setPasswords({ ...passwords, confirmPassword: e.target.value })
              }
              className="input"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Change Password
          </button>
        </form>
      </section>

      {/* Logout Section */}
      <section className="bg-surface rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Account Actions</h3>
        <button
          onClick={handleLogout}
          className="btn bg-error text-text-inverted hover:bg-error/90 w-full"
        >
          Logout
        </button>
      </section>
    </div>
  );
};

export default Settings;