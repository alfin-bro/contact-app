// pemanggilan api 1
import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3004/",
});
