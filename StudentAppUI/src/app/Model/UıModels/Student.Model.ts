import { Address } from "./Address.Model";
import { Gender } from "./Gender.Model";

export interface Student{
  id: string,
  firstName:string,
  lastName:string,
  dateOfBirth:string,
  email:string,
  mobile:number,
  profileImageUrl:string,
  genderId:string,
  gender:Gender,
  address:Address
}
