import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liked: boolean;
}

interface PostsContextProps {
  posts: Post[];
  addPost: (post: Post) => void;
  toggleLike: (id: string) => void;
}

const PostsContext = createContext<PostsContextProps | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Val Thorens',
      description: 'Beautiful view from the peak',
      imageUrl: './img/Mask group.png',
      liked: false
    },
    {
      id: '2',
      title: 'Restaurant terrace',
      description: 'Peaceful morning at the beach',
      imageUrl: './img/pexels-kassandre-pedro-8639743 1.png',
      liked: false
    },
    {
      id: '3',
      title: 'An outdoor cafe',
      description: 'Downtown at night',
      imageUrl: './img/Mask group (1).png',
      liked: false
    },
    {
      id: '4',
      title: 'A very long bridge, over the forest …',
      description: 'Hidden path through the woods',
      imageUrl: './img/pexels-kassandre-pedro-8639743 1-3.png',
      liked: false
    },
    {
      id: '5',
      title: 'Tunnel with morning light',
      description: 'Endless dunes at sunrise',
      imageUrl: './img/pexels-kassandre-pedro-8639743 1-4.png',
      liked: false
    },
    {
      id: '6',
      title: 'Mountain house',
      description: 'Aurora borealis in winter',
      imageUrl: './img/Mask group (4).png',
      liked: false
    }
  ]);

  const addPost = (post: Post) => {
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  const toggleLike = (id: string) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, toggleLike }}>
      {children}
    </PostsContext.Provider>
  );
};