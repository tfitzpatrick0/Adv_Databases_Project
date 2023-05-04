export const host = "http://3.209.127.91:8016";

// auth routes
export const getMaxIdRoute = `${host}/api/userpass/getmaxid/`;
export const checkExistingUserRoute = `${host}/api/userpass/checkexistinguser/`;
export const validateUPRoute = `${host}/api/userpass/validateup/`;
export const insertNewUserRoute = `${host}/api/userpass/insertnewuser/`;

// exercises routes
export const getAllExercisesRoute = `${host}/api/exercises/getallexercises/`;
export const getExercisesByFiltersRoute = `${host}/api/exercises/getexercisesbyfilters/`;

// profile routes
export const getProfileRoute = `${host}/api/profile/getprofile/`;
export const updateProfilePicRoute = `${host}/api/profile/updateicon/`;

// history routes
export const getHistoryRoute = `${host}/api/history/gethistory/`;
