import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>User Authentication | Log In</title>
            </Helmet>
            <div>
                <h2 className="text-4xl">Login</h2>
            </div>
        </HelmetProvider>
    );
};

export default Login;