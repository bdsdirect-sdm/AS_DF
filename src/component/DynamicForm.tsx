import Form from './Form';
import React from 'react';
import FormFieldData from '../utils/Data';

const handleSubmit:any = (values:any) => {
    try{
        console.log("Data Submitted=====>", values);
    }
    catch(err:any){
        console.log(err)
    }
}

const DynamicForm:React.FC = () => {
    
  return (
    <div>
        <h1 className='text-center'>Dynamic Form</h1>
        <Form formfield={FormFieldData} FormSubmit={handleSubmit} />

    </div>
  )
}

export default DynamicForm