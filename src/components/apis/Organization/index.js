import axios from "axios";

export const getOrgans = () => {
    return axios.get('https://62fce4b86e617f88dea0719a.mockapi.io/Organization')
}

export const getOrgan = (id) => {
    return axios.get(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`)
}

export const createOrgan = (formData) => {
    return axios.post(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization`,formData)
}

export const editOrgan = (id,formData) => {
    return axios.put(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`,formData)
}

export const deleteOrgan = (id) => {
    return axios.delete(`https://62fce4b86e617f88dea0719a.mockapi.io/Organization/${id}`)
}