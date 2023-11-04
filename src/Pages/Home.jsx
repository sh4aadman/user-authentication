import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>User Authentication | Home</title>
            </Helmet>
            <div>
                <h2 className="text-4xl">Home</h2>
            </div>
        </HelmetProvider>
    );
};

export default Home;