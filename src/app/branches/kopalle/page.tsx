'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const KopalleBranchPage = () => {
  const teamMembers = [
    // Add team members for Kopalle
  ]

  const galleryImages = [
    // Add gallery images for Kopalle
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-96 w-full"
      >
        <Image
          src="/images/Kopalle/kopalle-building.jpg" // Replace with actual building image
          alt="Kopalle Branch"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Kopalle Branch</h1>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="activities">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="activities">Our Activities</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="team">Meet Our Team</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          <TabsContent value="activities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Branch Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Preschool Timings:</strong> 8:30 AM - 3:30 PM</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-cover aspect-square"
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <CardHeader>
                      <Avatar className="mx-auto h-24 w-24">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold">{member.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Timings & Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Preschool Timings:</strong> 8:30 AM - 3:30 PM</p>
                <p><strong>Address:</strong> Kopalle Village, Andhra Pradesh</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default KopalleBranchPage
