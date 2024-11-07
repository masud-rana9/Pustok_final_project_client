import times from "lodash/times";
import Marquee from "react-marquee-slider";
import styled from "styled-components";

const Photo = styled.img`
  width: 368px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;
`;

const Reviews = ({ photos, key = Date.now() }) => (
  <div style={{ height: 200 }} className="mt-10">
    <Marquee key={key} velocity={25}>
      {times(7, Number).map((id) => (
        <Photo
          src={photos[id]}
          key={`marquee-example-people-${id}`}
          style={{ marginLeft: "87px" }}
        />
      ))}
    </Marquee>
  </div>
);

export default Reviews;
