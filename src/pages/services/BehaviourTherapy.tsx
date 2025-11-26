import ServiceTemplate from "@/components/services/ServiceTemplate";
import behaviourTherapyImg from "@/assets/behaviour-therapy.jpg";

const BehaviourTherapy = () => {
  return (
    <ServiceTemplate
      title="Behaviour Therapy"
      metaDescription="Positive behaviour therapy in Kollam with parent coaching and measurable progress plans. Evidence-based strategies for challenging behaviours in children."
      heroImage={behaviourTherapyImg}
      description="Positive behaviour strategies with parent coaching and measurable progress plans."
      benefits={[
        "Reduced challenging behaviors",
        "Improved emotional regulation",
        "Enhanced social skills",
        "Better parent-child relationships",
        "Increased positive behaviors",
        "Practical strategies for home and school"
      ]}
      whoItHelps="Children exhibiting challenging behaviors, emotional outbursts, difficulty following directions, or social interaction difficulties. Ideal for families seeking to understand and address behavioral challenges with positive approaches."
      approach="We use positive behavior support strategies, functional behavior assessment, and collaborative problem-solving. Parents receive training and ongoing coaching to implement strategies at home, ensuring consistency and long-term success."
    />
  );
};

export default BehaviourTherapy;