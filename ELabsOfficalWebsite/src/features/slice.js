import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventDetails: [{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" },{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" },{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" },{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],
    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator" },{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],
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
