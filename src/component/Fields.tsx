import React from 'react'
import { FieldInterface, optionInterface } from '../interface/FieldInterface';

const Fields:React.FC<any> = ({fields, change}) => {
  return (
    <>
    {
        fields.map((field:FieldInterface, index:number)=>{
            switch (field?.type) {
                case 'text' : case 'email' : case 'number' : case 'password' :
                return (
                    <>
                        <div className='d-flex' key={index}>
                            <label htmlFor={`${field.id}`} className='mt-3'>{field.label}:</label>
                            <input
                            onChange={(e) => change((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                            className={`${field.className}`}
                            type={`${field?.type}`}
                            name={`${field?.name}`}
                            placeholder={`${field.placeholder}`}
                            required={field.isRequired}
                            />
                        </div>
                    </>
                );
                case 'date' :
                    return (
                        <>
                            <div className='d-flex' key={index}>
                                <label htmlFor={`${field.id}`} className='mt-3'>{field.label}:</label>
                                <input
                                className={`${field.className}`}
                                type={`${field?.type}`}
                                onChange={(e) => change((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                                onFocus={(e:any) => e.target.showPicker?.()}
                                name={`${field?.name}`}
                                placeholder={`${field.placeholder}`}
                                required={field.isRequired}
                                />
                            </div>
                        </>
                    );
                case 'radio':
                    return (
                        <>
                            <div className='d-flex mt-2' key={index}>
                                <label htmlFor={`${field.id}`} className='mt-3'>{field.label}: </label>
                                {field.option?.map((opt:optionInterface, index:number)=>(
                                    <div className='d-flex mt-3' key={index} >
                                        <input type={`${field.type}`}
                                        id={`${opt.value}`}
                                        name={`${field.name}`}
                                        onChange={(e) => change((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                                        className={`${field.className} me-2`}
                                        value={`${opt.value}`}
                                        required={field.isRequired}
                                        />
                                        <label htmlFor={`${opt.value}`}>{opt.label}</label>
                                    </div>
                                ))}
                            </div>
                        </>
                    );
                    case 'select':
                        return (
                            <div className='d-flex mt-2'>
                                <label htmlFor={`${field.id}`} className='mt-3'>{field.label}:</label>
                                <select
                                className={`${field.className}`}
                                name={`${field.name}`}
                                onChange={(e) => change((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                                required={field.isRequired}
                                >
                                    <option key={index} value='' selected disabled>Select an option</option>
                                    {field.option?.map((opt:optionInterface, index:number)=>(
                                        <option key={index} value={`${opt.value}`}>{opt.label}</option>
                                        ))}
                                </select>
                            </div>
                        );
                    
                    case 'checkbox':
                        return (
                            <div className="form-check form-switch d-flex mt-3">
                                    <label htmlFor="">
                                        {field.label}
                                    </label>
                                    <input
                                    className={`${field.className}`}
                                    type={`${field.type}`}
                                    onChange={(e) => change((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                                    name={`${field.name}`}
                                    id={`${field.id}`}
                                    required={field.isRequired}
                                    />
                            </div>
                        );
            }
        })
    }
    </>
  )
}

export default Fields