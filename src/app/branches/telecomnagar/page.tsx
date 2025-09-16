'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const TelecomNagarBranchPage = () => {
  const teamMembers = [
    // Add team members for Telecomnagar
  ]

  const galleryImages = [
    "/images/2025/1.jpeg",
    "/images/2025/2.jpeg",
    "/images/2025/3.jpeg",
    "/images/2025/4.jpeg",
    "/images/2024/18f2cf62-6c49-4cf6-aa51-01448a0105be.jpg",
    "/images/2024/78ba84c9-d793-4baa-97ed-481ce8bfeb16.jpg",
    "/images/2024/8220f4ad-5bf6-4ca8-a89d-f4a02b3f5973.jpg",
    "/images/2024/d78261f4-c25d-470f-bbb8-8c6037217460.jpg",
    "/images/2024/IMG_20241202_171516.jpg",
    "/images/2024/IMG_20241202_190510.jpg",
    "/images/2023/IMG_20231001_072145__01.jpg",
    "/images/2023/IMG_20231001_074620.jpg",
    "/images/2023/20240330_175427.jpg",
    "/images/2023/20240330_180106.jpg",
    "/images/2022/20180314_201541.jpg",
    "/images/2022/20190420_153840.jpg",
    "/images/2022/20190812_165552.jpg",
    "/images/2022/20190812_171815.jpg",
    "/images/2022/20190812_172601.jpg",
    "/images/2022/20190812_173347.jpg",
    "/images/2021/20210711_180804.jpg",
    "/images/2021/20220105_170215.jpg",
    "/images/2021/20220105_183759.jpg",
    "/images/2021/20220105_190134.jpg",
    "/images/2021/20220105_192108.jpg",
    "/images/2020/IMG-20190420-WA0020.jpg",
    "/images/2020/IMG-20200212-WA0021.jpg",
    "/images/2020/IMG-20200212-WA0028.jpg",
    "/images/2019/563.jpg",
    "/images/2019/20170415_175753.jpg",
    "/images/2019/20190110_192044.jpg",
    "/images/2019/IMG-20200129-WA0020.jpg",
    "/images/2019/IMG-20200129-WA0023.jpg",
    "/images/2019/IMG-20200212-WA0006.jpg",
    "/images/2018/20181229_182109.jpg",
    "/images/2018/IMG-20160608-WA0046.jpg",
    "/images/2017/IMG-20170416-WA0028.jpg",
    "/images/2017/IMG-20170415-WA0016.jpg",
    "/images/2017/IMG-20170415-WA0020.jpg",
    "/images/2017/IMG-20170415-WA0024.jpg",
    "/images/2017/IMG-20170415-WA0031.jpg",
    "/images/2017/IMG-20170416-WA0010.jpg",
    "/images/2016/IMG-20161013-WA0006.jpg",
    "/images/2016/IMG-20161028-WA0012.jpg",
    "/images/2016/IMG-20161013-WA0009.jpg",
    "/images/2016/IMG-20161028-WA0010.jpg",
    "/images/2016/IMG-20161028-WA0011.jpg",
    "/images/2016/IMG-20161028-WA0024.jpg",
    "/images/2015/IMG-20150421-WA0000.jpg",
    "/images/2015/IMG-20150421-WA0002.jpg",
    "/images/2015/IMG-20150421-WA0003.jpg",
    "/images/2015/IMG-20150421-WA0004.jpg",
    "/images/2015/IMG-20150421-WA0005.jpg",
    "/images/2015/IMG-20150421-WA0006.jpg",
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
          src="/images/Telecomnagar/telecomnagar-building.jpg" // Replace with actual building image
          alt="Telecomnagar Branch"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Telecomnagar Branch</h1>
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
                <p><strong>Preschool Timings:</strong> 10:00 AM - 12:00 PM</p>
                <p><strong>Junior Batch (Class 1 to 5):</strong> 4:30 PM - 6:30 PM</p>
                <p><strong>Senior Batch (Class 6 to 10):</strong> 6:00 PM - 8:00 PM</p>
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
                <p><strong>Contact in person:</strong></p>
                <p>Morning: 10:00 AM to 11:30 AM</p>
                <p>Evening: 5:00 PM to 6:30 PM</p>
                <p><strong>Address:</strong> Telecomnagar, Andhra Pradesh</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default TelecomNagarBranchPage
