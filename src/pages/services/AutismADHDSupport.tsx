import ServiceTemplate from "@/components/services/ServiceTemplate";
import autismAdhdImg from "@/assets/autism-adhd-support.jpg";

const AutismADHDSupport = () => {
  return (
    <ServiceTemplate
      title="Autism & ADHD Support"
      metaDescription="Comprehensive autism and ADHD support in Kollam. Evidence-based interventions (ABA, OT, Speech, sensory programs) with SMART goals for communication and daily living."
      heroImage={autismAdhdImg}
      description="Evidence-based interventions (ABA, OT, Speech, sensory programs) with SMART goals for communication, daily living, and social skills."
      benefits={[
        "Individualized autism/ADHD interventions",
        "Improved focus and attention",
        "Enhanced communication skills",
        "Better sensory regulation",
        "Social skills development",
        "Daily living skills training"
      ]}
      whoItHelps="Children diagnosed with Autism Spectrum Disorder (ASD) or Attention Deficit Hyperactivity Disorder (ADHD). Beneficial for families seeking comprehensive, coordinated support across multiple therapeutic disciplines."
      approach="Our multidisciplinary team creates integrated intervention plans combining ABA therapy, speech therapy, occupational therapy, and sensory integration. We use SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals to track progress across communication, daily living, and social domains."
    />
  );
};

export default AutismADHDSupport;