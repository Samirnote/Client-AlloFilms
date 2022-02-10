import apiHandler from "../api/apiHandler";

export function getSliderData(limit = 10) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await apiHandler.get("/api/films", {
        params: { limit },
      });
      const pictures = data.map(({ picture }) => picture);
      resolve(pictures);
    } catch (err) {
      reject(err);
    }
  });
}

// apiHandler
//   .get("/api/films", { params: { limit: 10 } })
//   .then((films) => {
//     console.log(films);
//     filmsSlider = films.data;
//   })
//   .catch((err) => console.log(err));

// console.log(filmsSlider);

// const SliderData = [];

// axios
//   .get("http://127.0.0.1:4000/api/films", { params: { limit: 5 } })
//   .then((films) => {
//     console.log("toto");
//     console.log(films.data[3].name);
//     console.log(films.data[3].picture);
//     console.log(films.data);
//   })
//   .catch((err) => console.log(err));

// console.log(filmsSlider);

// const SliderData = [
//     {
//        image: filmsSlider[picture]
//     }
// ]

// export const SliderData = [
//     {
//       image:
//         'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//       image:
//         'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
//     },
//     {
//       image:
//         'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
//     },
//     {
//       image:
//         'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
//     },
//     {
//       image:
//         'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
//     }
//   ];
