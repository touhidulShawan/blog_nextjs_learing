import Image from "next/image";
const ProfileImage: React.FC = () => {
  return (
    <div className="pt-8 flex flex-col justify-center items-center">
      <Image
        src="/images/me.jpg"
        alt="profile image"
        width="180"
        height="180"
        className="rounded-full border-4 border-gray-400 p-2"
      />
      <h1 className="mt-4 mb-3 text-2xl text-gray-800 font-bold tracking-wider">
        Touhidul Shawan
      </h1>
    </div>
  );
};

export default ProfileImage;
