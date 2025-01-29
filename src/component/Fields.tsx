import React from "react";
import { FieldInterface, optionInterface } from "../interface/FieldInterface";

const Fields: React.FC<any> = ({ fields, formikCalls }) => {
  return (
    <>
      {fields.map((field: FieldInterface, index: number) => {
        switch (field?.type) {
          case "text":
          case "email":
          case "number":
          case "password":
            return (
              <div className="d-flex" key={index}>
                <label htmlFor={field.id} className="mt-3">
                  {field.label}:
                </label>
                <input
                  onChange={formikCalls.handleChange}
                  onBlur={formikCalls.handleBlur}
                  value={formikCalls.values[field.name]}
                  className={field.className}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.isRequired}
                />
                {formikCalls.touched[field.name] && formikCalls.errors[field.name] && (
                  <div className="text-danger text-sm">{formikCalls.errors[field.name]}</div>
                )}
              </div>
            );

          case "date":
            return (
              <div className="d-flex" key={index}>
                <label htmlFor={field.id} className="mt-3">
                  {field.label}:
                </label>
                <input
                  className={field.className}
                  type={field.type}
                  onChange={formikCalls.handleChange}
                  onBlur={formikCalls.handleBlur}
                  value={formikCalls.values[field.name] || ""}
                  onFocus={(e: any) => e.target.showPicker?.()}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.isRequired}
                />
                {formikCalls.touched[field.name] && formikCalls.errors[field.name] && (
                  <div className="text-danger text-sm">{formikCalls.errors[field.name]}</div>
                )}
              </div>
            );

          case "radio":
            return (
              <div className="d-flex mt-2" key={index}>
                <label htmlFor={field.id} className="mt-3">
                  {field.label}:
                </label>
                {field.option?.map((opt: optionInterface, i: number) => (
                  <div className="d-flex mt-3" key={i}>
                    <input
                      type={field.type}
                      id={opt.value}
                      name={field.name}
                      onChange={formikCalls.handleChange}
                      onBlur={formikCalls.handleBlur}
                      className={`${field.className} me-2`}
                      value={opt.value}
                      required={field.isRequired}
                      checked={formikCalls.values[field.name] === opt.value}
                    />
                    <label htmlFor={opt.value}>{opt.label}</label>
                  </div>
                ))}
                {formikCalls.touched[field.name] && formikCalls.errors[field.name] && (
                  <div className="text-danger text-sm">{formikCalls.errors[field.name]}</div>
                )}
              </div>
            );

          case "select":
            return (
              <div className="d-flex mt-2" key={index}>
                <label htmlFor={field.id} className="mt-3">
                  {field.label}:
                </label>
                <select
                  className={field.className}
                  name={field.name}
                  onChange={formikCalls.handleChange}
                  onBlur={formikCalls.handleBlur}
                  value={formikCalls.values[field.name]} // Fixed value binding
                  required={field.isRequired}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.option?.map((opt: optionInterface, i: number) => (
                    <option key={i} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {formikCalls.touched[field.name] && formikCalls.errors[field.name] && (
                  <div className="text-danger text-sm">{formikCalls.errors[field.name]}</div>
                )}
              </div>
            );

          case "checkbox":
            return (
              <div className="form-check form-switch d-flex mt-3" key={index}>
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  className={field.className}
                  type={field.type}
                  onChange={formikCalls.handleChange}
                  onBlur={formikCalls.handleBlur}
                  name={field.name}
                  id={field.id}
                  required={field.isRequired}
                  checked={formikCalls.values[field.name]} // Fixed checkbox value handling
                />
                {formikCalls.touched[field.name] && formikCalls.errors[field.name] && (
                  <div className="text-danger text-sm">{formikCalls.errors[field.name]}</div>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default Fields;
