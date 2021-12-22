import Head from "next/head";
import AboutSection from "../components/about/AboutSection";
import HeroSection from "../components/hero/HeroSection";

export default function Home() {
	return (
		<div className='bg-gray-700'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center justify-center w-full flex-1  text-center '>
				<HeroSection />
				<AboutSection />
			</main>
		</div>
	);
}
