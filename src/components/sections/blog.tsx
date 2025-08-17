import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Ultimate Guide to CBSE Exam Preparation",
    date: "October 5, 2023",
    excerpt: "Discover the best strategies and tips to excel in your CBSE exams. Our guide covers everything from study planning to exam-day tips.",
    image: "https://placehold.co/400x250.png",
    hint: "student studying books"
  },
  {
    title: "Mastering Class 10 Maths: A Student's Success Story",
    date: "September 30, 2023",
    excerpt: "Learn how our specialized tuition helped a student overcome their fear of maths and achieve top scores in their board exams.",
    image: "https://placehold.co/400x250.png",
    hint: "maths formulas chalkboard"
  },
  {
    title: "Why a Nearby Tuition Centre is Key to Your Child's Success",
    date: "September 27, 2023",
    excerpt: "Explore the benefits of local tuition centers, from saving travel time to fostering a stronger community connection for students.",
    image: "https://placehold.co/400x250.png",
    hint: "map location pin"
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-headline">Our Latest Insights</h2>
          <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
            Stay updated with our latest articles, tips, and news from the world of education.
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
