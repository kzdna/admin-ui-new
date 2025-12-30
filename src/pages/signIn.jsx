import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormsignIn from "../components/Fragments/FormSignIn";

function signIn() {
    return (
        <AuthLayout>
           <FormsignIn />
        </AuthLayout>
    )
}

export default signIn;