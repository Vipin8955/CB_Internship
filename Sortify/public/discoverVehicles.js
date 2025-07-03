const discoverBtn=document.querySelector('.discoverBtn');
const cars=document.querySelector('.cars');
const vehicles=document.querySelector('.vehiclesinput')
discoverBtn.addEventListener('click',populatecars);

function populatecars(event){
    console.log(vehicles.value);
}