import ServiceTemplate from "@/components/services/ServiceTemplate";
import counsellingImg from "@/assets/counselling.jpg";

const Counselling = () => {
  return (
    <ServiceTemplate
      title="Counselling Sessions"
      metaDescription="Child-friendly counselling in Kollam. Emotional support and professional counselling with trained therapists for children and families."
      heroImage={counsellingImg}
      description="Emotional support and child-friendly counselling with trained professionals."
      benefits={[
        "Safe emotional expression",
        "Coping skills development",
        "Improved self-esteem",
        "Family relationship support",
        "Stress and anxiety management",
        "Confidential therapeutic space"
      ]}
      whoItHelps="Children experiencing emotional difficulties, stress, grief, family changes, or self-esteem issues. Beneficial for children and families needing professional emotional support and guidance."
      approach="Our counselors create a warm, non-judgmental space using child-appropriate techniques including play therapy, art therapy, and talk therapy. We work collaboratively with families to support emotional well-being and resilience."
    />
  );
};

export default Counselling;