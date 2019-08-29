var loadImage = function(event)
{
  var pic = document.getElementById("pic")
  pic.src = URL.createObjectURL(event.target.files[0]);
}