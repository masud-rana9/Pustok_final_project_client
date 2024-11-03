const SectionTitle = ({ header, headerTitle }) => {
  return (
    <div className="w-4/12 mx-auto text-center m-10">
      <p className="text-[#D99904] text-xl my-2 ">---{headerTitle}---</p>
      <h1 className="text-4xl border-y-4 py-4">{header}</h1>
    </div>
  );
};

export default SectionTitle;
