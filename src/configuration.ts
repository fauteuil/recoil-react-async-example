/**
 * We generate a quasi-random URL to show that
 * when the service is called, changes in the results
 * will cause our Recoil app state to be synchronized.
 */
export const getUserApiUrl = () =>
  `https://reqres.in/api/users?page=${Math.max(
    1,
    Math.round(Math.random()) * 2
  )}`;
