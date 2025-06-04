import React from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { UserProvider } from './context/UserContext';
import { PostsProvider } from './context/PostsContext';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <UserProvider>
      <PostsProvider>
        <ModalProvider>
          <div className="min-h-screen bg-[#fcf5e5]">
            <Header />
            <ProfileSection />
            <Gallery />
            <Footer />
          </div>
        </ModalProvider>
      </PostsProvider>
    </UserProvider>
  );
}

export default App;