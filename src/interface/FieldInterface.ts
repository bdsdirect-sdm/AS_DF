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