function isTouching(p1,p2){
    if( p1.x - p2.x < p2.width/2 + p1.width/2
      && p2.x - p1.x < p2.width/2 + p1.width/2
      && p1.y - p2.y < p2.height/2 + p1.height/2
      && p2.y - p1.y < p2.height/2 + p1.height/2) {
  
    return true;
  }
  else {
  
    return false;
  }
  }
  function bounceOff(a,b){
    if( a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2)
      {a.velocityX = a.velocityX* (-1);
       b.velocityX = b.velocityX* (-1);
  
   
  }
  
    if( a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2)
      {a.velocityY = a.velocityY* (-1);
       b.velocityY = b.velocityY* (-1);
  
   
      }
  
    }