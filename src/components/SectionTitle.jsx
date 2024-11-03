const SectionTitle = ({ header, headerTitle }) => {
  return (
    <div className="w-4/12 mx-auto text-center m-3">
      <p className="text-blue-700 text-xl my-1 ">---{headerTitle}---</p>
      <h1 className="text-4xl border-y-4 py-4">{header}</h1>
    </div>
  );
};

export default SectionTitle;
