export class Userinfo {
public userid: number;
public fname: string;
public lname: string;
public num:number;
public email: string;
public address: string;
public city: string;
public state: string;
public pcode: number;

constructor(userid: number, fname: string, lname: string, num: number, email: string, address: string, city: string, state: string, pcode:number) {
  this.userid = userid;
  this.fname = fname;
  this.lname = lname;
  this.num = num;
  this.email = email;
  this.address = address;
  this.city = city;
  this.state = state;
  this.pcode = pcode;
}
}
