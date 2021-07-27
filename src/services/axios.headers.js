import axios from "axios";

const AxiosHeaders= ()  => {
    console.log("Headers modified");
    axios.defaults.headers.common['api_key'] = process.env.REACT_APP_MOVIE_API_KEY;
}

export default AxiosHeaders();