import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventDetails: [{ name: "", venue: "", date: "", shortDescription: "", Description: "" }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" }]
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

        }
    }
});

export const { addEvent, editEvent, addMember, editMember } = slice.actions;
export default slice.reducer;
