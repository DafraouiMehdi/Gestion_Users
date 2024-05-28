import { Userdata } from "./types"

const InfoUsers = ([val]) => {
    return {
        type : Userdata ,
        payload : [val]
    }
}

export default InfoUsers;