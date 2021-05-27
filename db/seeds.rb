# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Product.create([{name: "Rolex GMT-Master II",picture:"https://content.rolex.com/dam/watches/family-pages/gmt-master-ii/roller-history/professional-watches-gmt-master-ii-history-2005_m116718ln-0002_1802jdm_001_portrait.jpg?imwidth=340",price:36930,description:"100% Authentic Rolex Day Date 36; Reference# 118238-0116, Case diameter: 36mm; Case material: 18k Yellow Gold; Dial color: Champagne;"},
#   {name:"Echo Show 5",picture:"https://static.bhphoto.com/images/images2000x2000/1559831958_1484013.jpg",price:34,description:"Connect with video calling and messaging – Call friends and family who have the Alexa app, an Echo device with a screen, or Skype. Make announcements to other devices in your home."},
#   {name:"Blink Mini" ,picture:"https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Blink%20Mini%20Indoor%20Thumbnail_0.jpg",price:65,description:"1080P HD indoor, plug-in security camera with motion detection and two way audio that lets you monitor the inside of your home day and night."}])

@Rolex=Product.create(name: "Rolex GMT-Master II",picture:"https://content.rolex.com/dam/watches/family-pages/gmt-master-ii/roller-history/professional-watches-gmt-master-ii-history-2005_m116718ln-0002_1802jdm_001_portrait.jpg?imwidth=340",price:36930,description:"100% Authentic Rolex Day Date 36; Reference# 118238-0116, Case diameter: 36mm; Case material: 18k Yellow Gold; Dial color: Champagne;",category: "Watches")
@Echo=Product.create(name:"Echo Show 5",picture:"https://static.bhphoto.com/images/images2000x2000/1559831958_1484013.jpg",price:34,description:"Connect with video calling and messaging – Call friends and family who have the Alexa app, an Echo device with a screen, or Skype. Make announcements to other devices in your home.",category: "Electronics")
@Blink=Product.create(name:"Blink Mini" ,picture:"https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Blink%20Mini%20Indoor%20Thumbnail_0.jpg",price:65,description:"1080P HD indoor, plug-in security camera with motion detection and two way audio that lets you monitor the inside of your home day and night.",category: "Electronics")

@customer=Review.create(comment:"Great Piece! I love it",rating:5,product:@Rolex)