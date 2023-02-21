import Slider from "react-slick";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  padding: 0 2rem;
  background-color: #faf9f9;
  width: 50%;
  border-radius: 1rem;

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 3;
  }

  .slick-prev:before {
    content: url("/img/icon/icon_arrow_left_circle.svg");
  }

  .slick-next:before {
    content: url("/img/icon/icon_arrow_right_circle.svg");
  }

  .slick-dots {
    bottom: 0;
    padding-bottom: 1rem;
  }
`;

const SliderItem = styled.div`
  width: 100%;
  aspect-ratio: 1;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const Image = styled.img``;

export default function Slider01(props: { images: string[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {props.images?.map((el: string) => (
          <SliderItem key={uuidv4()}>
            <Image src={`https://storage.googleapis.com/${el}`} alt="" />
          </SliderItem>
        ))}
      </Slider>
    </Wrapper>
  );
}
