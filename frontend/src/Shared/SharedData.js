import planeTop from "../../src/assets/Images/coverPlaneTop.jpg";
import coverWindow from "../../src/assets/Images/coverWindow.jpg";
import coveroffer from "../../src/assets/Images/coveroffer.jpg";
import coverServe from "../../src/assets/Images/coverServe.jpg";
    
export const slides = [
    {
      id: 1,
      // icon: <FaPlaneDeparture />,
      heading: "Save Time & Fly with Comfort",
      text: "Welcome to Shankh Air Airlines, it is poised to be Uttar Pradesh’s inaugural scheduled airline, is gearing up to enhance connectivity across India.",
      bg: planeTop,
      buttonText: "Book Now",
      buttonClass: "btn-book"
    },
    {
      id: 2,
      // icon: <FaSuitcaseRolling />,
      heading: "Book Your Journey with Ease",
      text: "Hassle-free flight bookings at your fingertips and Our technology consistently delivers the best pricing for airline",
      bg: coverWindow,
      buttonText: "Read More",
      buttonClass: "btn-journey"
    },
    {
      id: 3,
      // icon: <FaMapMarkedAlt />,
      heading: "Enjoy discounts on domestic flights",
      text: "Discover breathtaking destinations across the country with unbeatable offers. From serene hill stations to vibrant cities, book now and make your journey more affordable and memorable.",    
      bg: coveroffer,
      buttonText: "View Destinations",
      buttonClass: "btn-explore"
    },
    {
      id: 4,
      // icon: <FaRegSmileBeam />,
      heading: "Your Comfort, Our Priority",
      text: "Customer satisfaction with every flight. Shankh Air removes barriers so even first-time flyers can travel comfortably",
      bg: coverServe,
      buttonText: "Contact Us",
      buttonClass: "btn-contact"
    }
  ];