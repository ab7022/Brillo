const ImageThumbnail: React.FC<{ thumbnailUrl: string | null }> = ({
  thumbnailUrl,
}) => (
  <div className="flex justify-center items-center bg-gray-300">
    {thumbnailUrl && (
      <img
        src={thumbnailUrl}
        alt="Thumbnail"
        className="max-w-72 max-h-72 m-2 rounded-xl shadow-lg object-cover border-2 border-white"
      />
    )}
  </div>
);
const readImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const thumbnailUrl = reader.result as string;
      resolve(thumbnailUrl);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export { readImage, ImageThumbnail };
