export interface Empleado{
  _id?:String,
  firstname: String,
  lastname: String,
  photo?: String,
  latitude?:String,
  longitude?:String
}

export class CEmpleado implements Empleado{
  _id?:String;
  firstname: String;
  lastname: String;
  photo?: String;
  latitude?:String;
  longitude?:String;
  constructor( firstname:String, lastname:String, photo?:String, latitude?:String, longitude?:String, _id?:String,){
    if(_id){
      this._id = _id;
    }
    this.firstname = firstname;
    this.lastname = lastname;
    if(photo){
      this.photo = photo;
    }
    if(latitude){
      this.latitude = latitude;
    }
    if(longitude){
      this.longitude = longitude;
    }
  }
}