import Banner from './Banner';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import EventDetails from './EventDetails';
import Appointment from './Appointment';
import Services from './Services';
import Gallery from './Gallery';
import Products from './Products';
import Testimonial from './Testimonial';
import Blog from './Blog';
import QrCode from './QrCode';
import BusinessHours from './BusinessHours';
import Contact from './Contact';
import styles from './vcard2.module.css';
import Youtube from './Youtube';
import Instagram from './Instagram';

const Vcard3 = () => {
  return (
    <div className={`${styles.vcard_two}`}>
      <Banner />
      <Profile />
      <ProfileDetails />
      <EventDetails />
      <Appointment />
      <Services />
      <Gallery />
      <Youtube />
      <Instagram />
      <Products />
      <Testimonial />
      <Blog />
      <QrCode />
      <BusinessHours />
      <Contact />
    </div>
  );
};

export default Vcard3;