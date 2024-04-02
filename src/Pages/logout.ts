// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../store/authAction'; // Assuming you have an action creator for logout

// const LogoutButton = () => {
//  // Access the Redux store's state
//  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

//  // Get the dispatch function from the Redux store
//  const dispatch = useDispatch();

//  // Function to handle logout
//  const handleLogout = () => {
//     dispatch(logout());
//  };

//  return (
//     <button onClick={handleLogout} disabled={!isLoggedIn}>
//       Logout
//     </button>
//  );
// };

// export default LogoutButton;