import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventDetails: [{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." },{ name: "Design of Development", venue: "Campus 12, Auditorium", date: "25-07-2024", shortDescription: "", Description: "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea." }],

    memberDetails: [{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator",imgSrc:"https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg"},{ name: "Md Asif Nawaz", position: "Asst.Lead Coordinator",imgSrc:"https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg"}],
    theme:"dark",
    feedback:[{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."},{name:"Md Asif Nawaz",feedback:"The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class."}]
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
