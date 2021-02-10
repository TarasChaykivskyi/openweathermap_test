import axios from "axios";

const API_KEY = '1bbf9e15ae12ac260807c1f51926467b'

const apiClient = axios.create({
    baseURL: "http://api.openweathermap.org",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    searchPlace(value) {
        return apiClient.get(`/geo/1.0/direct?q=${value}&limit=6&appid=${API_KEY}`);
    },
    getWhether(value) {
        return apiClient.get(`/data/2.5/weather?q=${value}&appid=${API_KEY}`);
    },
    getWeekForecast(value) {
        return apiClient.get(`/data/2.5/forecast?q=${value}&appid=${API_KEY}`);
    }
};


