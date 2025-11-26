import ServiceTemplate from "@/components/services/ServiceTemplate";
import groupTherapyImg from "@/assets/group-therapy.jpg";

const GroupTherapy = () => {
  return (
    <ServiceTemplate
      title="Group Therapy"
      metaDescription="Small-group therapy sessions in Kollam for children. Improve communication, social interaction, emotional regulation, and confidence in peer settings."
      heroImage={groupTherapyImg}
      description="Small-group sessions that improve communication, social interaction, emotional regulation, and confidence."
      benefits={[
        "Enhanced social skills",
        "Peer interaction opportunities",
        "Improved communication in groups",
        "Emotional regulation practice",
        "Confidence building",
        "Real-world social learning"
      ]}
      whoItHelps="Children needing social skills development, peer interaction practice, or confidence building. Ideal for children who struggle with social communication, turn-taking, or group participation."
      approach="Our therapists facilitate small-group sessions (4-6 children) matched by age and developmental level. Activities include structured games, social stories, role-playing, and collaborative projects designed to build social competence in a supportive environment."
    />
  );
};

export default GroupTherapy;