import ServiceTemplate from "@/components/services/ServiceTemplate";
import onlineTherapyImg from "@/assets/online-therapy.jpg";

const OnlineTherapy = () => {
  return (
    <ServiceTemplate
      title="Online Therapy"
      metaDescription="Online therapy services for children in Kollam. Flexible and accessible therapy sessions without compromising quality of care. Teletherapy for speech, OT, and more."
      heroImage={onlineTherapyImg}
      description="Flexible and accessible sessions without compromising quality of care."
      benefits={[
        "Convenient home-based sessions",
        "Flexible scheduling",
        "Reduced travel time and costs",
        "Consistent therapy access",
        "Parent involvement opportunities",
        "Same quality as in-person sessions"
      ]}
      whoItHelps="Families with transportation challenges, busy schedules, or living in remote areas. Ideal for children who respond well to digital platforms and families seeking convenient therapy options."
      approach="We use secure video conferencing platforms to deliver high-quality therapy sessions. Our therapists provide the same evidence-based interventions online, with resources and activities adapted for the virtual format. Parents receive guidance to facilitate effective sessions at home."
    />
  );
};

export default OnlineTherapy;