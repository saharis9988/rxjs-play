export interface Teacher {
    id:number;
    firstName:string;
    lastName:string;
    prof:string
    age:number;
}

export interface Student{
    firstName:string;
    lastName:string;
    teacherId:number;
}