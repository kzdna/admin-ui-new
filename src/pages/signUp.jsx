import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormsignUp from "../components/Fragments/FormSignUp"; 

function signUp() { 
    return (
        <AuthLayout>
            <FormsignUp /> 
        </AuthLayout>
    )
}

export default signUp;