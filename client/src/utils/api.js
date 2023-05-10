export const host = "http://3.209.127.91:8016";

// general routes
export const getAnyMaxIdRoute = `${host}/api/general/getanymaxid/`;

// auth routes
export const getMaxIdRoute = `${host}/api/userpass/getmaxid/`;
export const checkExistingUserRoute = `${host}/api/userpass/checkexistinguser/`;
export const validateUPRoute = `${host}/api/userpass/validateup/`;
export const insertNewUserRoute = `${host}/api/userpass/insertnewuser/`;
export const insertNewUserInfoRoute = `${host}/api/userpass/insertnewuserinfo/`;

// exercises routes
export const getAllExercisesRoute = `${host}/api/exercises/getallexercises/`;
export const getExercisesByFiltersRoute = `${host}/api/exercises/getexercisesbyfilters/`;

// routines routes
export const getRoutinesByIdRoute = `${host}/api/routines/getallroutines/`; // :id field attached to endpoint
export const updateRoutineEntryRoute = `${host}/api/routines/updateroutineentry/`;
export const addRoutineRoute = `${host}/api/routines/addroutine/`;
export const addRoutineEntryRoute = `${host}/api/routines/addroutineentry/`;

export const getRoutinesByUserRoute = `${host}/api/routines/getroutinesbyuser/`; // :id field attached to endpoint
export const getEntriesByRoutineRoute = `${host}/api/routines/getentriesbyroutine/`; // :routine_id field attached to endpoint
export const generateRecRoute = `${host}/api/routines/generaterec/`;

// profile routes
export const getProfileRoute = `${host}/api/profile/getprofile/`;
export const updateProfilePicRoute = `${host}/api/profile/updateicon/`;

// history routes
export const getHistoryRoute = `${host}/api/history/gethistory/`;
