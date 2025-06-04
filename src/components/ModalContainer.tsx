import React from 'react';
import { PlusCircle, Pencil } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useModal } from '../context/ModalContext';

const ProfileSection: React.FC = () => {
  const { user } = useUser();
  const { openModal } = useModal();

  return (
    <section className="mx-auto max-w-[80%] flex justify-between items-center pb-5 border-b border-[#212121]" aria-label="Profile Section">
      <div className="flex gap-5">
        <img 
          className="w-[190px] h-[190px] rounded object-cover transition-transform hover:scale-[1.02] duration-300" 
          src={user.avatar} 
          alt={user.name} 
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl text-[#212121] mb-4">{user.name}</h3>
            <span className="text-base text-[#212121b2]">{user.field}</span>
          </div>
          <div 
            className="w-fit flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={() => openModal('editProfile')}
          >
            <Pencil size={18} className="text-[#212121]" />
            <button className="text-base text-[#212121] bg-transparent border-none font-inherit">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <button 
        className="flex items-center gap-2 py-[18px] px-8 bg-[#212121] rounded-lg hover:opacity-80 transition-opacity duration-300 self-end"
        onClick={() => openModal('newPost')}
      >
        <PlusCircle size={12} className="text-[#fcf5e5]" />
        <span className="text-base text-[#fcf5e5]">New Post</span>
      </button>
    </section>
  );
};

export default ProfileSection;

// import React from 'react';
// import { useModal } from '../context/ModalContext';
// import EditProfileModal from './modals/EditProfileModal';
// import NewPostModal from './modals/NewPostModal';
// import ImagePreviewModal from './modals/ImagePreviewModal';

// const ModalContainer: React.FC = () => {
//   const { modalType } = useModal();
  
//   if (!modalType) return null;
  
//   return (
//     <>
//       {modalType === 'editProfile' && <EditProfileModal />}
//       {modalType === 'newPost' && <NewPostModal />}
//       {modalType === 'imagePreview' && <ImagePreviewModal />}
//     </>
//   );
// };

// export default ModalContainer;