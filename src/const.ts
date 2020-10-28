export const IP = "192.168.0.75"; // "localhost"; // "192.168.0.75";
export const PORT = "8080";
export const LEAP_URL = "ws://127.0.0.1:6437";
export const UPDATE_INTERVAL = 60; // milliseconds
export const DEBUG = false;
export const isDebug = () => DEBUG;
export const isTest = !!process?.env?.TEST;
