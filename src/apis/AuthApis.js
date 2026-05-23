import axios from "axios"

const signup = async (formData) => await axios.post("http://localhost:8081/auth/auth/signup", formData)
    .then(res => {
        console.log(res.data);
    }).catch(err => {
        console.error(err.response.status);
        console.error(err.response.data);
    });

const login = async (formData) => await axios.post("http://localhost:8081/auth/auth/login", formData)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.status);
        console.log(err.response.data);
    })

const addNewBank = async (formData) => await axios.post("http://localhost:8081/auth/bank/add", formData)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.status);
        console.log(err.response.data);
    })

const getBanksData = async (formData) => await axios.get("http://localhost:8081/auth/bank/get", formData)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.status);
        console.log(err.response.data);
    })

const changeStartDate = async (formData) => await axios.put("http://localhost:8081/auth/user/update/start", formData)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err.response.status);
        console.log(err.response.data);
    })

export {signup, login, addNewBank, getBanksData, changeStartDate};