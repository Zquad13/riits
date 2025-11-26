import ServiceTemplate from "@/components/services/ServiceTemplate";
import clinicalPsychologyImg from "@/assets/clinical-psychology.jpg";

const ClinicalPsychology = () => {
  return (
    <ServiceTemplate
      title="Clinical Psychology"
      metaDescription="Child clinical psychology services in Kollam. Assessment and treatment for emotional, behavioural, and mental health challenges in children and adolescents."
      heroImage={clinicalPsychologyImg}
      description="Assessment and treatment for emotional, behavioural, and mental health challenges."
      benefits={[
        "Comprehensive psychological assessments",
        "Evidence-based therapeutic interventions",
        "Emotional regulation support",
        "Anxiety and depression management",
        "Trauma-informed care",
        "Family counseling and support"
      ]}
      whoItHelps="Children and adolescents experiencing anxiety, depression, trauma, behavioral difficulties, or emotional challenges. Beneficial for families needing professional psychological assessment and intervention."
      approach="Our clinical psychologists conduct thorough assessments and provide evidence-based treatments including cognitive-behavioral therapy (CBT), play therapy, and family therapy. We create a safe, supportive environment for healing and growth."
    />
  );
};

export default ClinicalPsychology;