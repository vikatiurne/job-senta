import {$host} from "./index";

export const userGetLanding = async () => { // получение юзеров
    try {
        const response = await $host.get(`api/landingUser`);
        return response.data;
    } catch (error) {
        console.error('Error get user:', error);
        throw error;
    }
}


export const postUserLanding = async (values) => {
    try {
        console.log(values.name, values.email);
        const response = await $host.post(`api/landingReg`, {name: values.name, email: values.email});
        console.log(response.data);
        return response;
    } catch (error) {
        console.error('Error post user:', error);
        throw error;
    }
}