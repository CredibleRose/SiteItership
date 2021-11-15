import axios from "axios";
export default class ProfsService {
    static async getAll(){
        const respone = await axios.get('https://stoplight.io/mocks/kode-education/trainee-test/25143926/users')
        return respone.data.items
    }
}