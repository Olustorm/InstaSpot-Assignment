import React from 'react';
import { Heart } from 'lucide-react';
import { usePosts } from '../context/PostsContext';
import { useModal } from '../context/ModalContext';

const Gallery: React.FC = () => {
  const { posts, toggleLike } = usePosts();
  const { openModal, setSelectedPost } = useModal();

  const handleImageClick = (post: any) => {
    setSelectedPost(post);
    openModal('imagePreview');
  };

  return (
    <main className="mx-auto max-w-[80%] py-5">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="mb-6">
            <figure className="w-fit">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="rounded object-cover w-full h-[22rem] hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                onClick={() => handleImageClick(post)}
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-[17px] font-medium text-[#212121]">{post.title}</p>
                <Heart 
                  size={20} 
                  className={`cursor-pointer transition-all duration-300 ${post.liked ? 'fill-[#f40707] text-[#212121] opacity-100' : 'opacity-40'} hover:opacity-100 ${post.liked ? 'hover:scale-110' : ''}`}
                  onClick={() => toggleLike(post.id)}
                />
              </div>
              {/* <div className="flex justify-between items-center mt-1">
                <p className="text-[17px] font-medium text-[#212121]">{post.description}</p>
              </div> */}
            </figure>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Gallery;