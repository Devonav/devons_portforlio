import React from "react";

interface PageDirectButtonProps {
  text: string;
  link: string;
}

const PageDirectButton: React.FC<PageDirectButtonProps> = ({ text, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="page-directs bg-transparent border-2 border-[var(--text)] px-6 py-3 text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--main)] transition-all duration-300 ease-in-out font-medium uppercase tracking-wider transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
    >
      {text}
    </button>
  );
};

export default PageDirectButton;