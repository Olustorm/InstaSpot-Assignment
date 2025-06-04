import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useModal } from '../../context/ModalContext';

const EditProfileModal: React.FC = () => {
  const { user, updateUser } = useUser();
  const { closeModal } = useModal();
  
  const [formData, setFormData] = useState({
    name: user.name,
    field: user.field,
    avatar: user.avatar
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    closeModal();
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
        
        <h2 className="text-2xl font-semibold mb-6 text-[#212121]">Edit Profile</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-sm font-medium text-[#212121] mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              id="avatar"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121]"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#212121] mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121]"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="field" className="block text-sm font-medium text-[#212121] mb-1">
              Field
            </label>
            <input
              type="text"
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#212121]"
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;