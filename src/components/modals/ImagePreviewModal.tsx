import React from 'react';
import { X, Heart } from 'lucide-react';
import { usePosts } from '../../context/PostsContext';
import { useModal } from '../../context/ModalContext';

const ImagePreviewModal: React.FC = () => {
  const { toggleLike } = usePosts();
  const { closeModal, selectedPost } = useModal();

  if (!selectedPost) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fadeIn">
      <div className="relative max-w-4xl w-full h-[90vh] flex flex-col animate-scaleIn">
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          onClick={closeModal}
        >
          <X size={28} />
        </button>
        
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img 
            src={selectedPost.imageUrl} 
            alt={selectedPost.title} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        <div className="bg-white p-4 rounded-b-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-[#212121]">{selectedPost.title}</h2>
            <Heart 
              size={24} 
              className={`cursor-pointer transition-all duration-300 ${selectedPost.liked ? 'fill-[#212121] text-[#212121] opacity-100' : 'opacity-40'} hover:opacity-100 ${selectedPost.liked ? 'hover:scale-110' : ''}`}
              onClick={() => toggleLike(selectedPost.id)}
            />
          </div>
          {selectedPost.description && (
            <p className="text-[#212121] mt-2">{selectedPost.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewModal;