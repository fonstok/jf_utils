function hitting(_ob1, _ob2){
    let _rect1 = _ob1.getBoundingClientRect();
    let _rect2 =  _ob2.getBoundingClientRect();

    let touchData = {
      left:false,
      right:false,
      top:false,
      bottom:false, 
      hit:false
    }
    if (_rect1.x > _rect2.x && _rect1.x < _rect2.right) {
      touchData.left = true;
    } else {
      touchData.left = false;
    }
    if (_rect1.right < _rect2.right && _rect1.right > _rect2.x) {
      touchData.right = true;
    } else {
      touchData.right = false;
    }
    if (_rect1.y > _rect2.y && _rect1.y < _rect2.bottom){
      touchData.top = true;
    } else {
      touchData.top = false;
    }
    if (_rect1.bottom < _rect2.bottom && _rect1.bottom > _rect2.y){
      touchData.bottom = true;
    } else {
      touchData.bottom = false;
    }
    if ((touchData.left  || touchData.right)&&(touchData.top  || touchData.bottom)){
      //console.log("hitting");
      touchData.hit = true;
    } else {
      //console.log("not");
      touchData.hit = false;
    }
    //console.log(touchData);
    return touchData; 
  }