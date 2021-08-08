import axios from "axios";

/**
 * Set Api Key for every request made to movie API
 */
const AxiosHeaders= ()  => {
    console.log("Headers modified");
    axios.defaults.params = {}
    axios.defaults.params['api-key']= process.env.REACT_APP_MOVIE_API_KEY;
}

export default AxiosHeaders();