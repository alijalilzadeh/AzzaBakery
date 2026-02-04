const locationIcon = document.querySelector(".fa-location-crosshairs");
const mapFrame = document.querySelector(".map-wrapper iframe")
locationIcon.addEventListener("click",()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSucces,onError);
  }
  async function onSucces(position){
    lat = position.coords.latitude;
    long = position.coords.longitude;
    mapFrame.src = `https://www.google.com/maps?q=${lat},${long}&z=16&output=embed`

  }

  async function onError(err){
    console.log(err)
  }
})
