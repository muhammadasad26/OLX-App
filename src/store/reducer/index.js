
const INITIAL_STATE = {
    current_user: {},
    alldata: [],
    detail: {},
    key: "",
    category_data: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETCURRENTUSER":
            return ({
                ...state,
                current_user: action.payload
            })
        case "SETCATEGORY":
            return ({
                ...state,
                category: action.payload
            })
        case "SETDATA":
            return ({
                ...state,
                alldata: action.payload
            })
        case "SETDETAIL":
            return ({
                ...state,
                detail: action.payload
            })
        case "SETKEY":
            return ({
                ...state,
                key: action.payload
            })
        case "SETCATEGORYNAME":
            return ({
                ...state,
                category_name: action.payload
            })
        case "SETCATEGORYDATA":
            return ({
                ...state,
                category_data: action.payload
            })
    }
    return state;
}