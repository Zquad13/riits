import ServiceTemplate from "@/components/services/ServiceTemplate";
import specialEducationImg from "@/assets/special-education.jpg";

const SpecialEducation = () => {
  return (
    <ServiceTemplate
      title="Special Education"
      metaDescription="Special education services in Kollam with individualised instruction, tailored accommodations, and targeted learning interventions for children with diverse needs."
      heroImage={specialEducationImg}
      description="Individualised instruction, tailored accommodations, and targeted learning interventions."
      benefits={[
        "Personalized learning plans",
        "Adaptive teaching methods",
        "Multisensory instruction",
        "Academic skill building",
        "Learning disability support",
        "Progress monitoring and reporting"
      ]}
      whoItHelps="Children with learning disabilities, intellectual disabilities, or developmental delays requiring specialized educational approaches. Ideal for children who need individualized instruction and curriculum modifications."
      approach="Our special educators create Individualized Education Plans (IEPs) based on comprehensive assessments. We use multisensory teaching methods, assistive technology, and differentiated instruction to help every child reach their academic potential."
    />
  );
};

export default SpecialEducation;