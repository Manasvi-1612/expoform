import * as yup from "yup";

export const eventValidator = yup.object().shape({
    facilityName: yup.string(),
    facilityLocation: yup.string(),
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    phoneNumber: yup.number(),
    email: yup.string().email().required('Email is required'),
    website: yup.string().url(),
    facebookPage: yup.string().url(),
});
