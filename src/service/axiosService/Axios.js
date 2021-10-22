const axios = require('axios').default;
const baseUrl = "http://localhost:8080/employeepayrollservice"

exports.getService = (url) => {
    return axios.get(baseUrl + url)
}

exports.deleteService = (url) => {
    return axios.delete(baseUrl + url)
}

exports.postService = (url,data) => {
    return axios.post(baseUrl + url,data)
}

exports.updateService = (url,data) => {
    return axios.put(baseUrl + url,data)
}