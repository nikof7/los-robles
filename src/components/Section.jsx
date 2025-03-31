const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-brown-700 mr-8">{title}</h2>
      <div className="flex-grow ml-4 border-t-1 border-[var(--primary-color)]"></div>
    </div>
  );
};

export default SectionTitle;
