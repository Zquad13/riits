import ServiceTemplate from "@/components/services/ServiceTemplate";
import abaTherapyImg from "@/assets/aba-therapy.jpg";

const ABATherapy = () => {
  return (
    <ServiceTemplate
      title="ABA Therapy"
      metaDescription="Applied Behaviour Analysis (ABA) therapy in Kollam. Build meaningful and measurable skills based on behaviour-environment understanding. Evidence-based autism intervention."
      heroImage={abaTherapyImg}
      description="Applied Behaviour Analysis to build meaningful and measurable skills based on behaviour-environment understanding."
      benefits={[
        "Systematic skill development",
        "Data-driven progress tracking",
        "Increased independence",
        "Improved communication skills",
        "Better adaptive behaviors",
        "Reduced problem behaviors"
      ]}
      whoItHelps="Children with autism spectrum disorder, developmental delays, or learning difficulties. Particularly effective for children needing structured, systematic skill-building and behavior modification."
      approach="Our Board Certified Behavior Analysts (BCBAs) create individualized ABA programs using discrete trial training, natural environment teaching, and positive reinforcement. Every goal is measurable, and progress is tracked continuously with data-driven adjustments."
    />
  );
};

export default ABATherapy;