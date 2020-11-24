import CustomAxios from './axios';

export default class ApiHandle {
    static getBeerBrand() {
        return CustomAxios.get('beercraft5bac38c.json');
    }

    static getBrandImage() {
        return CustomAxios.get('beerimages7e0480d.json')
    }
}