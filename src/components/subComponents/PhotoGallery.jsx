import { useSelector } from "react-redux";

const Gallery = () => {
  const galleryImages = useSelector((state) => state.galleryImages);

  return (
    <div className="sm:px-10 px-5 ">
      <div className="grid gap-4 xl:px-16 md:px-8 px-5 xl:py-10 sm:py-10 py-5 bg-[#00000000] rounded-t-3xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden hover:shadow-md hover:scale-95 hover:shadow-textColor1 transition-all duration-300 ease-in-out"
          >
            <img
              className="w-full h-full object-cover group-hover:opacity-70 group-hover:blur-sm transition duration-300"
              src={img.url}
              alt={img.eventName}
            />
            <div className="absolute inset-0 group-hover:bg-gradient-to-tr group-hover:from-textColor1/40 group-hover:to-transparent items-end justify-start px-5 py-3 invisible group-hover:visible flex">
              <div className="text-white font-bold lg:text-xl text-base">
                {img.eventName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
