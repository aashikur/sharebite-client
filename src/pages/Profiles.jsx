import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import axios from "axios";

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [displayName, setDisplayName] = useState(user?.displayName || user?.name || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    if (!user) return <div className="text-center py-20">Not logged in.</div>;

    const handleEdit = (e) => {
        e.preventDefault();
        updateUser({ displayName, photoURL })
            .then(() => {
                setUser({ ...user, displayName, photoURL });
                setEditMode(false);
                axios.put(`https://sharebite-server-opal.vercel.app/users/${user.email}`, {
                    displayName,
                    photoURL,
                });
                Swal.fire("Success!", "Profile updated successfully.", "success");
            })
            .catch(() => {
                Swal.fire("Error", "Could not update profile.", "error");
            });
    };

    return (
        <div className="max-w-xl mx-auto py-12">
            <Helmet><title>Profile | ShareBite</title></Helmet>
            <div className="bg-white dark:bg-[#393053] p-8 rounded-3xl shadow-lg flex flex-col items-center gap-4">
                <img
                    src={user.photoURL || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"}
                    alt={user.displayName || user.name}
                    className="w-24 h-24 rounded-full shadow"
                />
                {editMode ? (
                    <form onSubmit={handleEdit} className="flex flex-col items-center gap-4 w-full">
                        <input
                            type="text"
                            value={displayName}
                            onChange={e => setDisplayName(e.target.value)}
                            className="input w-full"
                            placeholder="Display Name"
                            required
                        />
                        <input
                            type="text"
                            value={photoURL}
                            onChange={e => setPhotoURL(e.target.value)}
                            className="input w-full"
                            placeholder="Photo URL"
                            required
                        />
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-400 transition"
                                onClick={() => {
                                    setEditMode(false);
                                    setDisplayName(user.displayName || user.name || "");
                                    setPhotoURL(user.photoURL || "");
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold">{user.displayName || user.name}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
                        <button
                            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
                            onClick={() => setEditMode(true)}
                        >
                            Edit Profile
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;