// pass this two selected objects and it will return a data object with the following information
/*
hitting(object1, object2) // returns a data object with the following information
{
  left:false, // are the left sides crossing?
  right:false, // are the right sides crossing?
  top:false, // are the top sides crossing?
  bottom:false, // are the bottom sides crossing?
  hit:false // are the corners of the objects crossing?
 }    
//*/
let touchData = {
  left: false,
  right: false,
  top: false,
  bottom: false,
  hit: false,
};

function hitting(_ob1, _ob2) {
  let _rect1 = _ob1.getBoundingClientRect();
  let _rect2 = _ob2.getBoundingClientRect();

  if (_rect1.x < _rect2.right && _rect1.x > _rect2.x) {
    touchData.left = true;
  } else {
    touchData.left = false;
  }
  if (_rect1.right < _rect2.right && _rect1.right > _rect2.x) {
    touchData.right = true;
  } else {
    touchData.right = false;
  }
  if (_rect1.y > _rect2.y && _rect1.y < _rect2.bottom) {
    touchData.top = true;
  } else {
    touchData.top = false;
  }
  if (_rect1.bottom < _rect2.bottom && _rect1.bottom > _rect2.y) {
    touchData.bottom = true;
  } else {
    touchData.bottom = false;
  }
  if (
    (touchData.left || touchData.right) &&
    (touchData.top || touchData.bottom)
  ) {
    //console.log("hitting");
    touchData.hit = true;
  } else {
    //console.log("not");
    touchData.hit = false;
  }

  //console.log(touchData);
  return touchData;
}
