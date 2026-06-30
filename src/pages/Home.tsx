import Layout from '../components/Layout';
import HeroSection from '../sections/home/HeroSection';
import ServicesSection from '../sections/home/ServicesSection';
import TargetVerticalsSection from '../sections/home/TargetVerticalsSection';
import DifferentiatorsSection from '../sections/home/DifferentiatorsSection';
import SelectedWorkSection from '../sections/home/SelectedWorkSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TargetVerticalsSection />
      <DifferentiatorsSection />
      <SelectedWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
