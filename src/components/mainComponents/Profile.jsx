// import { useParams } from "react-router-dom";
// import { auth } from "../subComponents/firebase"; // Import your Firebase auth instance

// const Profile = () => {
//   const { userEmail } = useParams();

//   const handleChangePassword = () => {
//     const user = auth.currentUser;
//     if (user) {
//       // Trigger Firebase password reset flow
//       auth
//         .sendPasswordResetEmail(user.email)
//         .then(() => {
//           alert("Password reset email sent!");
//         })
//         .catch((error) => {
//           alert("Error sending password reset email: ", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h1>Profile: {userEmail}</h1>

//       <button
//         onClick={handleChangePassword}
//         className="border-2 border-textColor1"
//       >
//         Change Password
//       </button>
//       {/* Add more options here */}
//     </div>
//   );
// };

// export default Profile;
