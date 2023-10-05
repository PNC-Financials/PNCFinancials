import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: {},
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts(state, action){
            state.posts = action.payload;
        },
        // addPost(state, action){
        //     state.posts.push(action.payload);
        // },
        // deletePost(state, action){
        //     state.posts = state.posts.filter(post => post.id!== action.payload);
        // },
        // updatePost(state, action){
        //     const index = state.posts.findIndex(post => post.id === action.payload.id);
        //     state.posts[index] = action.payload;
        // },
    },
})

export default postSlice.reducer;

export function setPosts(post){
    return (dispatch, getState) => {
        dispatch(postSlice.actions.getPosts(post));
    }; 
}