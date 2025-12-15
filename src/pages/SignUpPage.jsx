import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";

import FormSignUp from "../components/Fragments/FormSignUp"; 

function SignUpPage() { 
    return (
        <AuthLayout>
            <FormSignUp /> 
        </AuthLayout>
    )
}

export default SignUpPage;