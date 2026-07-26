import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />

            <main className="py-5">
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;