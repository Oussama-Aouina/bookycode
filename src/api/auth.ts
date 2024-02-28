import axios from "axios";

export async function getUserById(id: string) {
    let req = await axios.get(""+ 'id/' + id);
    return req;
}