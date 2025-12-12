import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import speechImg from "@/assets/speech-therapy.jpg";
import otImg from "@/assets/occupational-therapy.jpg";
import behaviourImg from "@/assets/behaviour-therapy.jpg";
import abaImg from "@/assets/aba-therapy.jpg";
import psychologyImg from "@/assets/clinical-psychology.jpg";
import specialEdImg from "@/assets/special-education.jpg";
import groupImg from "@/assets/group-therapy.jpg";
import stepImg from "@/assets/step-school.jpg";

const galleryImages = [
  { src: speechImg, alt: "Speech therapy session", caption: "Speech Therapy" },
  { src: otImg, alt: "Occupational therapy activities", caption: "Occupational Therapy" },
  { src: behaviourImg, alt: "Behavior therapy session", caption: "Behaviour Therapy" },
  { src: abaImg, alt: "ABA therapy in action", caption: "ABA Therapy" },
  { src: psychologyImg, alt: "Psychology consultation", caption: "Clinical Psychology" },
  { src: specialEdImg, alt: "Special education classroom", caption: "Special Education" },
  { src: groupImg, alt: "Group therapy session", caption: "Group Therapy" },
  { src: stepImg, alt: "STEP School classroom", caption: "STEP School" }
];

const Gallery = () => {
  return (
    <Layout>
      <Helmet>
        <title>Gallery | RIITS Child Development Centre Kollam</title>
        <meta name="description" content="View photos from RIITS Child Development Centre in Kollam. See our therapy rooms, classrooms, activities, and happy children learning and growing." />
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90">
              Glimpses of our centre, therapies, and the joy of learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;