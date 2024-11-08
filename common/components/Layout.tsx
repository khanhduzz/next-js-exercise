import Head from 'next/head';
import React from 'react'
import Header from './Header';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>NextJs</title>
                <meta name="description" content="Assignment" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header>
            </Header>
            <div className="body" id="top" >{children}</div>
            <Footer />
        </>
    )
}

export default Layout