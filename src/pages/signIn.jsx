import React, { useContext, useState } from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { useNavigate } from "react-router-dom";

function SignIn() { 
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    }); 
  
    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleLogin = async (email, password) => {
        try {
            const { refreshToken } = await loginService(email, password);
            login(refreshToken);
            navigate("/");
        } catch (err) {
            setSnackbar({ open: true, message: err.msg, severity: "error" });
        }
    };

    return (
        <AuthLayout>
            <FormSignIn onSubmit={handleLogin} />

            <AppSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleCloseSnackbar}
            />
        </AuthLayout>
    );
}

export default SignIn;