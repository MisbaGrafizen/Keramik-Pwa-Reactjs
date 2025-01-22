import {
  ApiDelete,
  ApiGet,
  ApiPost,
  ApiPut,
} from '../../helper/axios';
import { GET_CATEGORY, GET_PRODUCT_IMAGE, GET_SUBCATEGORY} from '../type';


export const getCategroyAction = () => {
  return (dispatch) => {
      return ApiGet(`/admin/categories`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: GET_CATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORY,
        payload: error,
      });
    });
};
};


export const getSubcategoriesByCategoryAction = (categoryId) => {
  return (dispatch) => {
      return ApiGet(`/admin/sub-categories/${categoryId}`)
    .then((res) => {
      console.log('res', res);
      if (res.category) {
        dispatch({
          type: GET_SUBCATEGORY,
          payload: res.category,
        });
        return res.category;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_SUBCATEGORY,
        payload: error,
      });
    });
};
};

export const getProductBySubCategoryAction = (subCategoryId) => {
return (dispatch) => {
    return ApiGet(`/admin/product/${subCategoryId}`)
  .then((res) => {
    console.log('res', res);
    if (res.product) {
      dispatch({      
        type: GET_PRODUCT_IMAGE,
        payload: res.product,
      });
      return res.product;
    }
  })
  .catch((error) => {
    dispatch({
      type: GET_PRODUCT_IMAGE,
      payload: error,
    });
  });
};
};


export const getProductImageByProductAction = (productId) => {
  return (dispatch) => {
      return ApiGet(`/admin/product-images/${productId}`)
    .then((res) => {
      console.log('res', res);
      if (res.product) {
        dispatch({      
          type: GET_PRODUCT_IMAGE,
          payload: res.product,
        });
        return res.product;
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCT_IMAGE,
        payload: error,
      });
    });
  };
  };
