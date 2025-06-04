import React, { useState } from 'react';
import { X } from 'lucide-react';
import { usePosts } from '../../context/PostsContext';
import { useModal } from '../../context/ModalContext';

const NewPostModal: React.FC = () => {
  const { addPost } = usePosts();
  const { closeModal } = useModal();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.imageUrl) {
      addPost({
        id: Date.now().toString(),
        ...formData,
        liked: false
      });
      closeModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative animate-scaleIn">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-semibold mb-6 text-[#212121]">Create New Post</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-[#212121] mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121]"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-[#212121] mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121]"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-[#212121] mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121] min-h-[100px]"
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-[#212121] bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-[#212121] rounded-md hover:opacity-90 transition-opacity"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;