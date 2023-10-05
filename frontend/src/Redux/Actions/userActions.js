import { toast } from "react-toastify"
import { baseUrl } from "../../UrlHelper/baseUrl"
import { ADMIN_DELETE_USER_FAIL, ADMIN_DELETE_USER_REQUESTS, ADMIN_DELETE_USER_SUCCESS, ADMIN_UPDATE_USER_FAIL, ADMIN_UPDATE_USER_REQUESTS, ADMIN_UPDATE_USER_SUCCESS, ADMIN_USER_FAIL, ADMIN_USER_REQUESTS, ADMIN_USER_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUESTS, LOAD_USER_SUCCESS, LOGIN_FAIL, LOGIN_REQUESTS, LOGIN_SUCCESS, LOGOUT_FAIL, REGISTER_FAIL, REGISTER_REQUESTS, REGISTER_SUCCESS, SINGLE_USER_FAIL, SINGLE_USER_REQUESTS, SINGLE_USER_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUESTS, UPDATE_PASSWORD_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_REQUESTS, UPDATE_PROFILE_SUCCESS } from "../Constants/userConstants"
import axios from 'axios'


// Login a user
export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUESTS,
        })
        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post(`${baseUrl}/login`, { email, password }, config)

        if (data.success === true) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.user
            })
            toast.success("Login Successfully!! 🪄");
        }

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.message);
    }
}

// Register a new Account
export const userRegister = (registerData) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUESTS,
        })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        const { data } = await axios.post(`${baseUrl}/register`, registerData, config)

        if (data.success === true) {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: data.user
            })
            toast.success("Congratulations!! Account Created Successfully 🕺");
        }

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data.message
        })
        toast.error("Account Already Exists!! 🤷‍♂️");
    }
}

// Load User
export const LoadUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUESTS,
        })

        const { data } = await axios.get(`${baseUrl}/me`)

        if (data.success) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data.profileUser
            })
        }
    } catch (error) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}

// Log Out User
export const LogOutUser = () => async (dispatch) => {
    try {
        dispatch({
            type: LOAD_USER_REQUESTS,
        })

        await axios.get(`${baseUrl}/logout`)
        dispatch({
            type: LOGIN_SUCCESS,
        })
        toast.success("Log Out Successfully 🥲");

    } catch (error) {
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}


// Updating User Profile 
export const updateUserProfile = (registerData) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PROFILE_REQUESTS,
        })
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        const { data } = await axios.put(`${baseUrl}/me/update`, registerData, config)

        if (data.success === true) {
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
                payload: data.success
            })
            toast.success("Congratulations!! Your Profile Updated Successfully 🕺");
        }

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}

// Updating User Password
export const updatePassword = (passwords) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PASSWORD_REQUESTS,
        })
        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.put(`${baseUrl}/password/update`, passwords, config)
        if (data.success === true) {
            dispatch({
                type: UPDATE_PASSWORD_SUCCESS,
                payload: data.success
            })
            toast.success("Congratulations!! Your Password Updated Successfully 🕺");
        }

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}


// Get All User by Admin

export const getAdminAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_USER_REQUESTS,
        })

        const { data } = await axios.get(`${baseUrl}/admin/user`)
        if (data.success) {
            dispatch({
                type: ADMIN_USER_SUCCESS,
                payload: data.getUser
            })
        }
    } catch (error) {
        dispatch({
            type: ADMIN_USER_FAIL,
            payload: error.response.data.message
        })
        toast.error(error.response.data.message);
    }
}

export const singleUserDetails = (id) => async (dispatch) => {

    try {
        dispatch({ type: SINGLE_USER_REQUESTS });
        const { data } = await axios.get(`${baseUrl}/admin/user/${id}`)

        dispatch({
            type: SINGLE_USER_SUCCESS,
            payload: data.getUser,
        })
    } catch (error) {
        dispatch({
            type: SINGLE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update User ADMIN
export const updateUser = (id, userData) => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_UPDATE_USER_REQUESTS });
        const { data } = await axios.put(`${baseUrl}/admin/user/${id}`, userData)

        dispatch({
            type: ADMIN_UPDATE_USER_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_UPDATE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

// Delete Particular User ADMIN
export const deleteUser = (id) => async (dispatch) => {

    try {
        dispatch({ type: ADMIN_DELETE_USER_REQUESTS });
        const { data } = await axios.delete(`${baseUrl}/admin/user/${id}`)

        dispatch({
            type: ADMIN_DELETE_USER_SUCCESS,
            payload: data.success,
        })
    } catch (error) {
        dispatch({
            type: ADMIN_DELETE_USER_FAIL,
            payload: error.response.data.message
        })
    }
}