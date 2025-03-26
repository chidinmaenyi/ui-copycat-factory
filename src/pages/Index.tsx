
import React from 'react';
import Header from '@/components/Header';
import TopNavBar from '@/components/TopNavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-scale-in">
      <TopNavBar />
      <Header />
      <main className="max-w-screen-xl mx-auto p-4"></main>
    </div>
  );
};

export default Index;
