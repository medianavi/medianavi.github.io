import React from 'react'
import Contact from '../components/Contact';
import Header from '../components/Header';
import Intro from '../components/main/Intro';
import Members from '../components/main/Members';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <Members />
        <Contact />
      </main>
      <Footer />
      <Modal />
    </>
  );
}
