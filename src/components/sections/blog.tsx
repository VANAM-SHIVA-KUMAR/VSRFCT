import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Importance of Early Childhood Education",
    date: "October 10, 2023",
    excerpt: "Discover why foundational learning in early years is crucial for long-term academic and personal success.",
    image: "https://placehold.co/400x250.png",
    hint: "children learning alphabet"
  },
  {
    title: "Effective Learning Techniques for Students",
    date: "October 5, 2023",
    excerpt: "Explore proven strategies and study habits that can help students of all ages improve their comprehension and retention.",
    image: "https://placehold.co/400x250.png",
    hint: "student writing notes"
  },
  {
    title: "A Day at VSRFCT: Stories from Our Centre",
    date: "September 28, 2023",
    excerpt: "Read heartwarming stories and experiences from the students and teachers at our free tuition centre.",
    image: "https://placehold.co/400x250.png",
    hint: "happy students classroom"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Insights & Stories</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Stay updated with our latest articles on education, child development, and news from our centre.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  data-ai-hint={post.hint}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
