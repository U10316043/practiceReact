import $ from 'jquery'
export const decrease = () =>  ({ type: 'DECREMENT' });

export const increase = () => ({ type: 'INCREMENT' });

export const getSum = (a1, b1) => ({ type: 'SUM', a1, b1 });

export const getSub = (a2, b2) => ({ type: 'SUB', a2, b2 });

export const getGo = (iPhonenum) => ({ type: 'GO',iPhonenum });

export const getName = (sUsername) => ({ type: 'REVEALNAME', sUsername  });

export const getRandomImages = (dispatch, state) => {
  dispatch({ type: 'IMAGES_LOADING' });
  var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  $.getJSON(imgurAPI).done(data =>
    dispatch({ type: 'IMAGES', data:data.data}))
}
