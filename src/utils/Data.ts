const FormFieldData = [
        {
            id: 'fullName',
            htmlFor: 'fullName',
            label: "Full Name",
            name: "fullName",
            type: "text",
            placeholder: "Enter Your Full Name",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: 'email',
            htmlFor: 'email',
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter Your Email",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: 'password',
            htmlFor: 'password',
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "**********",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: 'phoneNumber',
            htmlFor: 'phoneNumber',
            label: "Phone Number",
            name: "phoneNumber",
            type: "number",
            placeholder: "Enter Your Phone Number",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: 'dob',
            htmlFor: 'dob',
            label: "DOB",
            name: "dob",
            type: "date",
            placeholder: "Enter Your Date of Birth",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            
            id: 'weight_in',
            htmlFor: 'weight_in',
            label: "weight Units",
            option: [
                {
                    value:"Kg",
                    label: "Kg"
                },
                {
                    value:"lbs",
                    label: "lbs"
                },
                {
                    value:"gram",
                    label: "gram"
                }
            ],
            name: "weight_in",
            type: "radio",
            isRequired:false,
            className: 'form-check-input ms-5 mt-2'
        },
        {
            id: 'profile_photo',
            htmlFor: 'profile_photo',
            label: 'profile Photo',
            type: "file",
            name: "profile_photo",
            isRequired:true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: "gender",
            htmlFor: "gender",
            label: "Gender",
            option: [
                {
                    value: "male",
                    label: "Male"
                },
                {
                    value: "female",
                    label: "Female"
                },
                {
                    value: "other",
                    label: "Mixed"
                }
            ],
            name: 'gender',
            type: 'select',
            isRequired: true,
            className: 'form-control w-75 ms-5 mt-2'
        },
        {
            id: 'subscribe',
            name: 'subscribe',
            label: 'Subscribe',
            type: 'checkbox',
            isRequired: false,
            className: 'form-check-input ms-5 mt-2'
        }
    ]

export default FormFieldData;