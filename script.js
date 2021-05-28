document.getElementById('ok').addEventListener('click', function(e){
    alert('ok is clicked')
    
}
)
document.getElementById('cancel').addEventListener('click', function(e){
    alert('cancel is clicked')
    
}
)
document.getElementById('no').addEventListener('click', function(e){
    alert('no is clicked')
    
}
)

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coor = "X coords: " + x + ", Y coords: " + y;

    console.log(coor)
  }
function clearCoor() {
    var coor = "X coords: " + 0 + ", Y coords: " + 0;
  }