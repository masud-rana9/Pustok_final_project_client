const SectionTitle = ({ header, headerTitle }) => {
  return (
    <div className="w-4/12 mx-auto text-center  m-3" data-aos="fade-up">
      <p className=" text-xl my-1 ">---{headerTitle}---</p>
      <h1 className="text-4xl border-y-2 border-[#0074D9] py-4">{header}</h1>
    </div>
  );
};

export default SectionTitle;
