import Head from "next/head"
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

type AppLayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: AppLayoutProps) {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}