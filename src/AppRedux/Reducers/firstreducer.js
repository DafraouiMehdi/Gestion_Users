import { Userdata } from "../actions/types";

const firstreducer = (state = { dataUsers : [] } , action) => {
    switch (action.type) {
        case Userdata:
            return {
                ...state,
                dataUsers: [...state.dataUsers, ...action.payload]
            };
        default:
            return state;
    }
}

export default firstreducer;