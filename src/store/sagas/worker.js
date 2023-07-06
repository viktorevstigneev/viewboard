// import { put, call } from "redux-saga/effects";

// import {
//   getCurrentUserFailed,
//   getCurrentUserSuccess
// } from "../actions/getCurrentUser/getCurrentUser";
// import {
//   getLanguagesFailed,
//   getLanguagesSuccess,
// } from "../actions/getLanguages/getLanguages";
// import { getCurrentUserApi } from "../../api/userApi";

// export function* getCurrentUser({ text, inputLanguage, outputLanguage }) {
//   try {
//     const responseData = yield call(
//       getCurrentUserApi,
//       text,
//       inputLanguage,
//       outputLanguage
//     );
//     yield put(getCurrentUserSuccess(responseData));
//   } catch (error) {
//     yield put(getCurrentUserFailed(error));
//   }
// }

// export function* getLanguages() {
//   try {
//     const responseData = yield call(getLanguagesList);
//     yield put(getLanguagesSuccess(responseData));
//   } catch (error) {
//     yield put(getLanguagesFailed(error));
//   }
// }
