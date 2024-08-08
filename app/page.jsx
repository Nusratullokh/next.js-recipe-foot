"use client"
import { useState, useEffect } from 'react';
import Sidebar from "./components/sidebar/pages";
import Nav from "./components/nav/pages";
import Hero from "./components/hero/pages";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar />
      <Hero searchQuery={searchQuery} />
    </div>
  );
}

export default Page;
