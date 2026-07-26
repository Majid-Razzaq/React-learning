import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import RegistrationForm from "../../components/common/RegistrationForm";

function Home() {
    return (
        <>
            <Navbar />
                <main>
                    <h1>Registration Page</h1>
                    <RegistrationForm />
                </main>
            <Footer />
        </>
    );
}

export default Home;