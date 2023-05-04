import * as usersAPI from "./users-api";

export function setJWT(jwt) {
  localStorage.setItem("token", JSON.stringify(jwt.token));
}

export function parseJWT(token) {
  if (!token) return null;
  return JSON.parse(atob(token.split(".")[1]));
}

export function removeJWT() {
  localStorage.removeItem("token");
}

export function getJWT() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = parseJWT(token);
  if (payload.exp < Date.now() / 1000) {
    removeJWT();
    return null;
  }
  return token;
}

export function getUser() {
  const token = getJWT();
  return token ? parseJWT(token).user : null;
}

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  setJWT(token);
  return getUser();
}

export async function logOut() {
  removeJWT();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem("token", token);
  return getUser();
}
