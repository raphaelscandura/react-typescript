import axios from 'axios';

const http_v2=axios.create({
	baseURL: 'http://localhost:8000/api/v2'
});

export default http_v2;