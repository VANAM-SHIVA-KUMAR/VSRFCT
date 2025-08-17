import Image from "next/image";

const images = [
  { src: "https://placehold.co/600x400.png", alt: "Students engaged in a classroom activity", hint: "students classroom activity" },
  { src: "https://placehold.co/600x400.png", alt: "A happy student showing their notebook", hint: "happy student notebook" },
  { src: "https://placehold.co/600x400.png", alt: "The tuition centre building exterior", hint: "tuition center building" },
  { src: "https://placehold.co/600x400.png", alt: "Group photo of students and teachers", hint: "students teachers group photo" },
  { src: "https://placehold.co/600x400.png", alt: "A special event held at the centre", hint: "educational event celebration" },
  { src: "https://placehold.co/600x400.png", alt: "A teacher helping a student with a problem", hint: "teacher helping student" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Gallery</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            A glimpse into the life and activities at VSRFCT Tuition Centre.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={600}
                height={400}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
