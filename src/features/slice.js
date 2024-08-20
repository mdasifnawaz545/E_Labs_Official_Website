import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventDetails: [
    {
      name: "Design of Development",
      venue: "Campus 12, Auditorium",
      date: "25-07-2024",
      shortDescription: "",
      Description:
        "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea.",
    },
    {
      name: "Design of Development",
      venue: "Campus 12, Auditorium",
      date: "25-07-2024",
      shortDescription: "",
      Description:
        "Lorem ipsum to esse. Quia ab nulla consequatur minima consectetur eius culpa beatae adipisci. Veniam, numquam? Ipsa harum fuga, nemo tenetur modi ea repudiandae iure perspiciatis voluptas architecto deleniti iste.Magni quibusdam modi ipsam femo aperiam sunt aut quidem! Reprehenderit, rem quasi. Odit recusandae eveniet repudiandae quidem voluptatum minus aperiam eaepudiandae cum similique iure iste inventore? Laboriosam, nobis ea.",
    },
  ],

  memberDetails: [
    {
      name: "Md Asif Nawaz",
      position: "Asst.Lead Coordinator",
      imgSrc:
        "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
    },
    {
      name: "Md Asif Nawaz",
      position: "Asst.Lead Coordinator",
      imgSrc:
        "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
    },
  ],
  theme: "dark",
  feedback: [
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
    {
      name: "Md Asif Nawaz",
      feedback:
        "The Classes offered by this society is amazing and one of the best among all the society whomever i had taken the class.",
    },
  ],
  sliders: [
    {
      eventName: "Event 1",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
    {
      eventName: "Event 2",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
    {
      eventName: "Event 3",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
    {
      eventName: "Event 3",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
    {
      eventName: "Event 4",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
    {
      eventName: "Event 5",
      images: [
        {
          url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        },

        {
          url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
        },
        {
          url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
        },
      ],
    },
  ],
  galleryImages: [
    {
      url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user",
      eventName: "Event 1",
    },
    {
      url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      eventName: "Event 2",
    },
    {
      url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
      eventName: "Event 3",
    },
    {
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      eventName: "Event 4",
    },
    {
      url: "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
      eventName: "Event 5",
    },
    {
      url: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
      eventName: "Event 6",
    },
    {
      url: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user",
      eventName: "Event 7",
    },
    {
      url: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      eventName: "Event 8",
    },
    {
      url: "https://thumbs.dreamstime.com/b/flower-sun-sunny-summer-day-91542486.jpg",
      eventName: "Event 9",
    },
    {
      url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      eventName: "Event 10",
    },
    {
      url: "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
      eventName: "Event 11",
    },
    {
      url: "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
      eventName: "Event 12",
    },
  ],
  studyMaterials: [
    {
      domain: "WEB DEVELOPMENT",
      img: "/Images/std_mt/webdev.png",
      sec: "webdev",
      resUrls: [
        {
          name: "pdf 1",
          url: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
        },
        {
          name: "pdf 2",
          url: "",
        },
        {
          name: "pdf 3",
          url: "",
        },
        {
          name: "pdf 4",
          url: "",
        },
        {
          name: "pdf 5",
          url: "",
        },
        {
          name: "pdf 6",
          url: "",
        },
      ],
    },
    {
      domain: "AI/ML",
      img: "/Images/std_mt/aiml.png",
      sec: "aiml",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "JAVA",
      img: "/Images/std_mt/java.png",
      sec: "java",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "UI / UX",
      img: "/Images/std_mt/uiux.png",
      sec: "uiux",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "CLOUD COMPUTING",
      img: "/Images/std_mt/cloud.png",
      sec: "cloud",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
    {
      domain: "IoT & EMBEDDED",
      img: "/Images/std_mt/iot.png",
      sec: "iot",
      resUrls: [
        {
          name: "",
          url: "",
        },
      ],
    },
  ],
};

const slice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addEvent: (state, action) => {},
    editEvent: (state, action) => {},
    addMember: (state, action) => {},
    editMember: (state, action) => {},
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { addEvent, editEvent, addMember, editMember } = slice.actions;
export default slice.reducer;
