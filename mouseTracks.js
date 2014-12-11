(function(){
  document.onmousemove = handleMouseMove;
  var registeredMoves = 0;
  var moves = 100;

  function handleMouseMove(event){
    if(moves === 0){
      moves = 100;
      event = event || window.event; //Older Browser support
      if (event.pageX == null && event.clientX != null) {
        var eventDoc, doc, body, pageX, pageY;
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }
      coords = document.createElement('li');
      coords.innerHTML = 'X: ' + event.pageX + ', Y:' + event.pageY;
      document.getElementById('mouseCoords').appendChild(coords);
      registeredMoves++;
      console.log(registeredMoves);
    } else {
      moves--;
    }
  };
}());