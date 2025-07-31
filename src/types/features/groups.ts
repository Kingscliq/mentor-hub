import { StaticImageData } from "next/image";

export interface GroupModulesI {}

export interface GroupsDetailsI {
    _id: string;
    projectName: string;
    mentor: { name: string; userType: string; photo: StaticImageData; _id:string; email:string;
        phoneNumber:string;
        RegNumber:string;
        department:string};
    mentees: {
      name: string;
      userType: string;
      photo: StaticImageData;
      _id: string;
      email:string;
        phoneNumber:string;
        RegNumber:string;
        department:string
    }[];
  }