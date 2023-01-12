import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DefaultLayout({ children }) {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header className="z-40" />
            {children}
            <Footer />
        </div>
    )
}