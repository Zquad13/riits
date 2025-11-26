import ServiceTemplate from "@/components/services/ServiceTemplate";
import occupationalTherapyImg from "@/assets/occupational-therapy.jpg";

const OccupationalTherapy = () => {
  return (
    <ServiceTemplate
      title="Occupational Therapy"
      metaDescription="Occupational therapy for children in Kollam. Builds self-care skills, sensory integration, play skills, school readiness, and pre-vocational abilities."
      heroImage={occupationalTherapyImg}
      description="Builds self-care skills, sensory integration, play, school readiness, and pre-vocational abilities."
      benefits={[
        "Enhanced fine motor skills and coordination",
        "Improved self-care and daily living skills",
        "Better sensory processing and regulation",
        "Increased independence in daily activities",
        "Improved focus and attention",
        "School readiness and learning support"
      ]}
      whoItHelps="Children with sensory processing difficulties, fine motor delays, self-care challenges, attention difficulties, or developmental coordination disorders. Beneficial for children needing support with daily activities, school tasks, or play skills."
      approach="Our occupational therapists create individualized treatment plans using sensory integration therapy, play-based activities, and skill-building exercises. We work on practical daily skills while making therapy engaging and meaningful for your child."
    />
  );
};

export default OccupationalTherapy;