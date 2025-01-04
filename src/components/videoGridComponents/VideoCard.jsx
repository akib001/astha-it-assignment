import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

const VideoCard = ({ title, thumbnail, index, onFocus, isFocused, id }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isFocused && cardRef.current) {
      cardRef.current.focus();
    }
  }, [isFocused]);

  const handleClick = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      className={`relative group cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 outline-none 
          ${
            isFocused ? "ring-[6px] ring-primary scale-105" : "hover:scale-105"
          }`}
      onFocus={() => onFocus(index)}
      onClick={handleClick}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover"
      />
    </div>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onFocus: PropTypes.func.isRequired,
  isFocused: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default VideoCard;
