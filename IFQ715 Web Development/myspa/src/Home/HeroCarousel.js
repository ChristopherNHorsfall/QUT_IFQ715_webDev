import { Carousel } from "react-bootstrap";

const carouselData = [
    {
      image: "https://picsum.photos/id/114/700/250",
      heading: "Cloudy here today",
      caption: "Some representative placeholder content for the first slide.",
    },
    {
      image: "https://picsum.photos/id/124/700/250",
      heading: "Wonderful day for a boat trip",
      caption: "Some representative placeholder content for the first slide.",
    },
    {
      image: "https://picsum.photos/id/13/700/250",
      heading: "Sun's out thumbs out",
      caption: "Some representative placeholder content for the first slide.",
    },
   ];

function CarouselImage({ image, heading, caption }) {
return (
    <Carousel.Item key={image}>
    <img src={image} className="d-block w-100" alt="..." />
    <Carousel.Caption>
        <h1>{heading}</h1>
        <p>{caption}</p>
    </Carousel.Caption>
    </Carousel.Item>
);
}

export default function HeroCarousel() {
    return (
    <Carousel className="d-none d-sm-block">
        {carouselData.map(CarouselImage)}
    </Carousel>
    );
}

