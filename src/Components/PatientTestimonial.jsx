import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PatientTestimonial = () => {
  const testimonial = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "The care I received at this hospital was exceptional. The staff was attentive and professional, and the facilities were top-notch. I felt well taken care of throughout my stay.",
      avatar: "/doctor.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "I was impressed by the level of expertise and compassion shown by the medical team. They made a difficult time much easier to handle, and I am grateful for their support.",
      avatar: "/doctor.png",
    },
    {
      id: 3,
      name: "Emily Johnson",
      testimonial:
        "The hospital's commitment to patient care is evident in every interaction. The doctors and nurses went above and beyond to ensure my comfort and recovery.",
      avatar: "/doctor.png",
    },
    {
      id: 4,
      name: "Sarah Brown",
      testimonial:
        "From the moment I walked in, I felt welcomed and valued. The medical staff was thorough and caring, and I left feeling confident in the care I received.",
      avatar: "/doctor.png",
    },
    {
      id: 5,
      name: "Michael Williams",
      testimonial:
        "The hospital's state-of-the-art facilities and dedicated staff made my treatment experience smooth and effective. I highly recommend their services to anyone in need of medical care.",
      avatar: "/doctor.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-2xl md:text-5xl font-semibold py-10">Our Testimonials</div>
      <Slider {...settings} className="overflow-hidden">
        {testimonial.map((testimonial) => (
          <div key={testimonial.id} className="px-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PatientTestimonial;
