import image from "../../../../public/cover.png";
const BookCover = () => {
  return (
    <div
      className="h-[80vh] w-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima fuga
        incidunt, molestiae delectus amet neque. Doloremque laudantium eos minus
        veritatis?
      </h1>
    </div>
  );
};

export default BookCover;
