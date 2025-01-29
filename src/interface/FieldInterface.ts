export interface optionInterface{
  value: string;
  label: string;
}

export interface FieldInterface{
  id: string;
  htmlFor: string;
  label: string;
  name: string;
  option?: optionInterface[];
  type: string;
  placeholder?: string;
  isRequired: boolean;
  className?: string;
}

export interface DataInterface{
  fullName: string;
  email: string;
  password: string;
  phoneNumber: any;
  dob: any;
  weight_in: string;
  // profile_photo: null,
  gender: string;
  subscribe: boolean;
}