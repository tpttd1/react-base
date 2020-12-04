import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from '../actions';

const INIT_STATE = {
    user: localStorage.getItem('user_token'),
    forgotUserMail: '',
    newPassword: '',
    resetPasswordCode: '',
    loading: false,
    error: '',
    userDetails: JSON.parse(localStorage.getItem('user_details')) || {}
};
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload.user, userDetails: action.payload.userDetails, error: '' };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, user: '', error: action.payload.message };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: '' };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, user: '', error: action.payload.message };
        case LOGOUT_USER:
            return { ...state, user: null, error: '' };
        default: return { ...state };
    }
}
