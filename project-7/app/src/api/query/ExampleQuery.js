// import Axios from "../axios";

// export const fetchExample = async() => {
//   try {
//     const { data } = await Axios.get("/");
//     return data;
//   } catch (error) {
//     throw Error(error.response.data.message);
//   }
// };

import Axios from "../Axios";

export const fetchExample = async () => {
  try {
    const { data } =  Axios.get("/"); // Await the Axios call
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error fetching data");
  }
};

