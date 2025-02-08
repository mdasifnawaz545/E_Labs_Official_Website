// // src/components/PrivateRoute.js
// // import React from "react";
// import { Navigate } from "react-router-dom";
// import { auth } from "./firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

// const PrivateRoute = ({ element }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return user ? element : <Navigate to="/login" />;
// };

// export default PrivateRoute;
