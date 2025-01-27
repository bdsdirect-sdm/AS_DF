export const FormFieldData = [
        {
            id: 'fullName',
            htmlFor: 'fullName',
            label: "Full Name",
            name: "fullName",
            type: "text",
            placeholder: "Enter Your Full Name",
            isRequired:true
        },
        {
            id: 'email',
            htmlFor: 'email',
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter Your Email",
            isRequired:true
        },
        {
            id: 'phoneNumber',
            htmlFor: 'phoneNumber',
            label: "Phone Number",
            name: "phoneNumber",
            type: "number",
            placeholder: "Enter Your Phone Number",
            isRequired:true
        },
        {
            id: 'dob',
            htmlFor: 'dob',
            label: "DOB",
            name: "dob",
            type: "date",
            placeholder: "Enter Your Date of Birth",
            isRequired:true
        },
        {
            
            id: 'weight_in',
            htmlFor: 'weight_in',
            label: "weight in",
            option: [
                {
                    value:"Kg"
                }
            ],
            name: "weight_in",
            type: "radio",
            isRequired:false
        },
        {
            id: 'profile_photo',
            htmlFor: 'profile_photo',
            label: 'profile Photo',
            type: "file",
            name: "profile_photo",
            isRequired:true
        },
        {
            
        }


    ]