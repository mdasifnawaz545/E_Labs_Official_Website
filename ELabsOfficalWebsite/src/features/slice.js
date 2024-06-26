import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventDetails: [{ name: "", venue: "", date: "", shortDescription: "", Description: "" }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" }],
    theme:"dark"
}

const slice = createSlice({
    name: "main",
    initialState,
    reducers: {
        addEvent: (state, action) => {

        },
        editEvent: (state, action) => {

        },
        addMember: (state, action) => {

        },
        editMember: (state, action) => {

        },
        changeTheme:(state,action)=>{
                state.theme=action.payload
        }
    }
});

export const { addEvent, editEvent, addMember, editMember } = slice.actions;
export default slice.reducer;
