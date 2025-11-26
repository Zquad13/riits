import ServiceTemplate from "@/components/services/ServiceTemplate";
import speechTherapyImg from "@/assets/speech-therapy.jpg";

const SpeechTherapy = () => {
  return (
    <ServiceTemplate
      title="Speech & Language Therapy"
      metaDescription="Professional speech and language therapy in Kollam for children. Supports expressive, receptive, and pragmatic communication. Early intervention for long-term developmental success."
      heroImage={speechTherapyImg}
      description="Supports expressive, receptive, and pragmatic communication. Early intervention strengthens long-term developmental outcomes."
      benefits={[
        "Improved articulation and pronunciation",
        "Enhanced vocabulary development",
        "Better understanding of language",
        "Strengthened social communication skills",
        "Increased confidence in verbal expression",
        "Support for language-related learning difficulties"
      ]}
      whoItHelps="Children with speech delays, articulation disorders, language processing difficulties, stuttering, or social communication challenges. Ideal for children who struggle to express themselves verbally or understand spoken language."
      approach="Our speech therapists use evidence-based techniques including play-based therapy, parent-child interaction therapy, and structured language programs. Each session is tailored to your child's unique needs and developmental stage, with regular progress monitoring and parent training."
    />
  );
};

export default SpeechTherapy;