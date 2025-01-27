import { Form } from 'formik';
import React, { useState } from 'react'

const handleSubmit:any = (values:FormData) => {
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
        <h1>Dynamic Form</h1>
        <Form />

    </div>
  )
}

export default DynamicForm