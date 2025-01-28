import React, { useState } from 'react'
import Fields from './Fields';

const Form:React.FC<any> = ({formfield, FormSubmit}) => {
  const [data, setData] = useState<any>({});

  const DefaultSubmitHandler = (values:any) => {
    console.log("default submit handler values--------->", values);
  }

  return (
      <form className='mx-auto w-50 mt-5 ' onSubmit={(e:any)=>{
        e.preventDefault();
        DefaultSubmitHandler(data);
        FormSubmit(data)}} >
        <Fields fields={formfield} change={setData} />
        <button className='btn btn-outline-dark mt-4 w-25' type='submit' >Submit</button>
      </form>
  )
}

export default Form