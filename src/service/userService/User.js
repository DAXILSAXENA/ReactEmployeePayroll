const httpService=require('../axiosService/Axios');

exports.getAllUser = () => {
    let url = "/get"
    return httpService.getService(url);
}

exports.deleteUser = (id) => {
    let url = "/delete/"
    return httpService.deleteService(url + id)
}

exports.addUser = (data) => {
    let url = "/create/"
    return httpService.postService(url,data)
}