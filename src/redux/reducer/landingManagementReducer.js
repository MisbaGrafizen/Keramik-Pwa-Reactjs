import { RESET_GLOBAL_STATE, GET_CATEGORY, GET_PRODUCT_IMAGE, DELETE_CATEGORY, DELETE_GROUP_ITEM, UPDATE_GROUP_ITEM, ADD_PRODUCT_IMAGE, GET_PRODUCT, ADD_PRODUCT, GET_SUBCATEGORY, ADD_CATEGORY, ADD_SUBCATEGORY, UPDATE_CATEGORY, UPDATE_METAL, DELETE_PRODUCT } from '../type';

const initialState = {
    getAllCategory: [],
    getSubcategory: [],
    getProduct: [],
    addCategory: [],
    addSubcategory: [],
    addProductImage: [],
    updateCategory: [],
    updateMetal: [],
    updateGroupItem: [],
    deleteProduct: null,
    deleteMetal: [],
    deleteGroupItem: [],
    getProductImage: [],
    addProduct: [],
    getOrderList: [],
    getorderById: [],
    deleteCategory: null,
};


const landingManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CATEGORY: 
        return {
            ...state,
            getAllCategory: action.payload,
        };
        case GET_SUBCATEGORY: 
        return {
            ...state,
            getSubcategory: action.payload,
        };
        case GET_PRODUCT_IMAGE:
            return {
                ...state,
                getProductImage: action.payload,
            };
        case GET_PRODUCT: 
         return {
            ...state,
            getProduct: action.payload,
         };
         case ADD_PRODUCT:
            return {
                ...state,
                addProduct: action.payload,
            };
        case ADD_CATEGORY:
            return {
                ...state,
                addCategory: action.payload,
                    };
        case ADD_SUBCATEGORY:
            return {
                ...state,
                addSubcategory: action.payload,
            };
        case ADD_PRODUCT_IMAGE:
            return {
                ...state,
                addProductImage: action.payload,
            };
        case UPDATE_CATEGORY: 
        return {
            ...state,
            getAllCategory: state.getAllCategory.map((category) =>
                category._id === action.payload.categoryId
                  ? { ...category, name: action.payload.name }
                  : category
              ),
            };
        case UPDATE_METAL: 
        return {
            ...state,
            updateMetal: action.payload,
        };
        case UPDATE_GROUP_ITEM:
            return {
                ...state,
                updateGroupItem: action.payload,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                getProduct: state.getProduct.filter(
                    (product) => product._id !== action.payload 
                  ),
                  deleteProduct: null,
            };
        // case DELETE_METAL:
        //     return {
        //         ...state,
        //         deleteMetal: action.payload,
        //     };
        case DELETE_GROUP_ITEM:
            return {
                ...state,
                deleteGroupItem: action.payload,
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                getAllCategory: state.getAllCategory.filter(
                    (category) => category._id !== action.payload
                ),  
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default landingManagementReducer;