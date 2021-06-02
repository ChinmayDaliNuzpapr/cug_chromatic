import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Nav.js';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer_component/Footer';
import Question from '../components/Workflow/Question';
import Sidebar from '../components/Workflow/Sidebar';
import Trending from '../components/Workflow/Trending';
import Head from 'next/head';
// import
// import
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
				/>
			</Head>
			<Navbar />
			<HomePage />
			<Footer />
			<Question />
			<Sidebar />
			<Trending />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
