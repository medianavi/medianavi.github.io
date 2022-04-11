import React from 'react'
import Contact from '../components/Contact';
import Header from '../components/Header';
import Intro from '../components/main/Intro';
import About from '../components/main/About';
import Members from '../components/main/Members';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <About />
        <Members />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
