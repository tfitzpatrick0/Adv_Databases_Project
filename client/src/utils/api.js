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

export const deleteRoutineRoute = `${host}/api/routines/deleteroutine/`;
export const deleteRoutineEntriesByIdRoute = `${host}/api/routines/deleteroutineentriesbyeid/`;

// profile routes
export const getProfileRoute = `${host}/api/profile/getprofile/`;
export const updateProfilePicRoute = `${host}/api/profile/updateicon/`;
export const updateBioRoute = `${host}/api/profile/updatebio/`; // :id field attached to endpoint

// history routes
export const getHistoryRoute = `${host}/api/history/gethistory/`;
export const saveWorkoutToHistRoute = `${host}/api/history/saveworkouttohist/`;

// achievements routes
export const createAchievementsRoute = `${host}/api/achievements/createachievements/`; // :id field attached to endpoint
export const updateAchievementRoute = `${host}/api/achievements/updateach/`;

// metrics routes
export const getRadarMetricsRoute = `${host}/api/metrics/getradarmetrics/`;
export const getMetricsForGraph = `${host}/api/metrics/getmetricsforgraph/`; // gets nutrition metrics to populate a line graph, weird endpoint name
export const getMetricsForHistoryWithNutritionRoute = `${host}/api/metrics/getmetricsforhistorywithnutrition/`; // :uid field attached to endpoint
export const addMetricsToHistRoute = `${host}/api/metrics/addmetricstohist/`;

// nutrition routes
export const addNutritionToHistRoute = `${host}/api/nutrition/addnutritiontohist/`;
