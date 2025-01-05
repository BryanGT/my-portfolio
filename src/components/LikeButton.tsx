import { useState, useEffect } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    const savedLikes = localStorage.getItem('portfolio_likes');
    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio_likes', likes.toString());
  }, [likes]);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLike}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ❤️ Like
      </button>
      <span className="text-lg font-semibold">{likes} Likes</span>
    </div>
  );
};

export default LikeButton;
