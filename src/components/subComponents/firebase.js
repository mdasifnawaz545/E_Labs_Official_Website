// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   GoogleAuthProvider,
//   GithubAuthProvider,
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const fbhandleGoogleSignIn = ({ setGoogleLoading, setError }) => {
//   setGoogleLoading(true);
//   const provider = new GoogleAuthProvider();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       setGoogleLoading(false);
//       // console.log("Signed in with Google:", result.user);
//       // Handle successful sign-in, e.g., redirect or update UI
//     })
//     .catch((error) => {
//       setGoogleLoading(false);
//       // console.error("Error during Google sign-in:", error);
//       setError("Google Sign-In failed. Please try again.");
//     });
// };

// const fbhandleGithubSignIn = ({ setGithubLoading, setError }) => {
//   setGithubLoading(true);
//   const provider = new GithubAuthProvider();

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       setGithubLoading(false);
//       // console.log("Signed in with Github:", result.user);
//       // Handle successful sign-in, e.g., redirect or update UI
//     })
//     .catch((error) => {
//       setGithubLoading(false);
//       // console.error("Error during Github sign-in:", error);
//       setError("Github Sign-In failed. Please try again.");
//     });
// };

// const handleEmailSignUp = async ({
//   email,
//   password,
//   phoneNumber,
//   setLoading,
//   setError,
//   onSuccess,
// }) => {
//   setLoading(true);
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;

//     // Update the user's profile with additional fields
//     await updateProfile(user, { phoneNumber });

//     // Save additional fields to Firestore or another database
//     await setDoc(doc(db, "users", user.uid), {
//       email: user.email,
//       phoneNumber,
//       uid: user.uid,
//     });

//     setLoading(false);
//     // console.log("Signed up with Email:", user);
//     onSuccess();
//   } catch (error) {
//     setLoading(false);
//     // console.error("Error during Email sign-up:", error);
//     setError("Email Sign-Up failed. Please try again.");
//   }
// };

// const handleEmailLogin = ({
//   email,
//   password,
//   setLoading,
//   setError,
//   onSuccess,
// }) => {
//   setLoading(true);
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       setLoading(false);
//       // console.log("Signed in with Email:", userCredential.user);
//       onSuccess();
//     })
//     .catch((error) => {
//       setLoading(false);
//       // console.error("Error during Email sign-in:", error);
//       setError("Email Sign-In failed. Please try again.");
//     });
// };

// export {
//   auth,
//   fbhandleGoogleSignIn,
//   fbhandleGithubSignIn,
//   handleEmailSignUp,
//   handleEmailLogin,
// };
