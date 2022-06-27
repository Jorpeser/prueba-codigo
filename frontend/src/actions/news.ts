import * as api from "../api";

// Creadores de actions

// Get all news
export const getNews = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchNews();
        dispatch({ type: "GET_NEWS", payload: data });
    } catch (err) {
        console.log(err);
    }
};

// Create a new
export const createNew = (newNew: any) => async (dispatch: any) => {
    try {
        const { data } = await api.createNew(newNew);
        dispatch({ type: "CREATE_NEW", payload: data });
    } catch (err) {
        console.log(err);
    }
};

// Update new
export const updateNew = (id: string, post: any) => async (dispatch: any) => {
    try {
        const { data } = await api.updateNew(id, post);
        dispatch({ type: "UPDATE_NEW", payload: data });
    } catch (err) {
        console.log(err);
    }
};

// Delete new
export const deleteNew = (id: string) => async (dispatch: any) => {
    try {
        await api.deleteNew(id);
        dispatch({ type: "DELETE_NEW", payload: id });
    } catch (err) {
        console.log(err);
    }
};
