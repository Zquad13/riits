import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age group do you serve?",
    answer: "We serve children from infancy through adolescence (0-18 years). Our services are tailored to each child's developmental stage and individual needs."
  },
  {
    question: "How do I get started?",
    answer: "Contact us at 9744170109 or use our online booking form to schedule an initial assessment. During this assessment, we'll evaluate your child's needs and recommend appropriate services."
  },
  {
    question: "Do you accept insurance?",
    answer: "Please contact us directly to discuss insurance coverage and payment options. We can provide documentation for insurance reimbursement where applicable."
  },
  {
    question: "How long are therapy sessions?",
    answer: "Session length varies by service type and individual needs, typically ranging from 30-60 minutes. Your therapist will recommend the appropriate duration during the assessment."
  },
  {
    question: "Can parents observe therapy sessions?",
    answer: "Yes! We encourage parent involvement. Depending on the therapy type, parents may observe, participate, or receive separate training sessions to support their child's progress at home."
  },
  {
    question: "Do you provide online therapy?",
    answer: "Yes, we offer online therapy services for families who prefer remote sessions or have transportation challenges. Our online therapy maintains the same quality as in-person sessions."
  },
  {
    question: "What is STEP School?",
    answer: "STEP School is our inclusive preschool program for children with diverse learning needs. It provides individualized attention, adaptive education, and a sensory-friendly environment with specially trained teachers."
  },
  {
    question: "How often should my child attend therapy?",
    answer: "Frequency depends on your child's individual needs and goals. This will be determined during the assessment and may be adjusted as your child progresses. Typical recommendations range from 1-5 sessions per week."
  },
  {
    question: "Do you work with schools?",
    answer: "Yes, with parent permission, we can collaborate with your child's school to ensure consistent support across environments. We can provide consultation, training, and progress updates to school staff."
  },
  {
    question: "What should I bring to the first appointment?",
    answer: "Please bring any previous assessment reports, medical records, school reports, and a list of current concerns. Also bring your child's favorite toy or comfort item to help them feel at ease."
  },
  {
    question: "How do you measure progress?",
    answer: "We use standardized assessments, data collection, and regular progress monitoring to track your child's development. You'll receive regular updates and comprehensive progress reports."
  },
  {
    question: "What makes RIITS CDC different?",
    answer: "We offer a multidisciplinary team approach, evidence-based interventions, family-centered care, and both in-person and online options. Our integrated services ensure comprehensive support for every child."
  }
];

const FAQ = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ | RIITS Child Development Centre Kollam</title>
        <meta name="description" content="Frequently asked questions about RIITS Child Development Centre services, therapy sessions, assessments, STEP School, and more. Get answers to common questions." />
      </Helmet>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about our services and programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-border rounded-xl px-6 bg-card">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-semibold text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're here to help! Contact us directly and we'll be happy to answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9744170109" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Call: 9744170109
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;