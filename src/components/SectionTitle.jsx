const SectionTitle = ({ header, headerTitle }) => {
  return (
    <div className="w-4/12 mx-auto text-center  m-3" data-aos="fade-up">
      <p className=" md:text-xl text-base my-1 ">---{headerTitle}---</p>
      <h1 className="md:text-4xl text-center w-full text-base border-y-2 border-[#0074D9] py-4">
        {header}
      </h1>
    </div>
  );
};

export default SectionTitle;
