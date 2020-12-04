
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import Api from '../../helpers/Api';
import { USERS } from '../../constants/api';
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
} from '../actions';

import {
    loginUserSuccess,
    loginUserError,
    registerUserSuccess,
    registerUserError,
} from './actions';
import ApiController from '../../helpers/Api';


export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

function* loginWithEmailPassword({ payload }) {
    const { email, password } = payload.user;
    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);

        if (loginUser.success) {
            localStorage.setItem('user_token', loginUser.result.accessToken);
            const userDetails = yield call (getUserDetails, loginUser.result.accessToken);
            localStorage.setItem('user_details', JSON.stringify(userDetails));
            yield put(loginUserSuccess(loginUser.result, userDetails));
            window.open('/', '_self');
        } else {
            yield put(loginUserError(loginUser.message));
        }
    } catch (error) {
        yield put(loginUserError(error));

    }
}

const loginWithEmailPasswordAsync = async (email, password) =>
    await Api.callAsync('post', USERS.login, {
        email: email,
        password: password
    }).then(data => {
        return data.data;
    }).catch(error => error);

const getUserDetails = async () => {
    return await Api.callAsync('get', USERS.details, {}, {
        
    }).then(data => {
        return data.data;
    }).catch(error => error);
}

export function* watchRegisterUser() {
    yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}
const registerWithEmailPasswordAsync = async (firstName, lastName, email, password, confirmPassword) =>
    await Api.callAsync('post', USERS.register, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    }).then(data => {
        return data.data;
    }).catch(error => error.response.data);

function* registerWithEmailPassword({ payload }) {
    const { firstName, lastName, email, password, confirmPassword } = payload.user;
    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, firstName, lastName, email, password, confirmPassword);
        if (registerUser.success) {
            localStorage.setItem('user_token', registerUser.result.accessToken);
            // const userDetails = yield call(getUserDetails, registerUser.result.accessToken);
            // localStorage.setItem('user_details', JSON.stringify(userDetails));
            yield put(registerUserSuccess(registerUser));
            window.open('/app', '_self');
        } else {
            yield put(registerUserError(registerUser));
        }
    } catch (error) {
        yield put(registerUserError(error));
    }
}

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
    await ApiController.callAsync("POST", USERS.logout, null);
    history.push('/')
}

function* logout({ payload }) {
    const { history } = payload
    try {
        yield call(logoutAsync, history);
        localStorage.removeItem('user_token');
        localStorage.removeItem('user_details');
    } catch (error) {
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
    ]);
}