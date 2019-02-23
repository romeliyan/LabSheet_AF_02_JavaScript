
var vehicleName = 'Toyota';

function printvehicleNameOuter(){
    console.log(this.vehicleName);
}

console.log(this);

printvehicleNameOuter();


var vehicle = {
    vehicleName : 'Nissan',
    printvehiclenameInner: printvehicleNameOuter};

vehicle.printvehiclenameInner();