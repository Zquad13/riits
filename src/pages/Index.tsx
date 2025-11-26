import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import DepartmentsGrid from "@/components/home/DepartmentsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StepSchoolHighlight from "@/components/home/StepSchoolHighlight";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import CTASection from "@/components/home/CTASection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>RIITS Child Development Centre | Kollam | Therapy & Special Education</title>
        <meta name="description" content="RIITS Child Development Centre offers inclusive, evidence-based therapy and education for children of all abilities in Kollam. Speech therapy, OT, ABA, special education & more." />
        <meta name="keywords" content="child development centre kollam, speech therapy kollam, occupational therapy kollam, autism support kollam, ADHD therapy kollam, special education kollam" />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <DepartmentsGrid />
      <WhyChooseUs />
      <StepSchoolHighlight />
      <TestimonialsSlider />
      <CTASection />
    </Layout>
  );
};

export default Index;