# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Volcano.create!([
  {name: "Fuego", image_url: "https://i.imgur.com/KTIM1IOm.jpg", 
content: "Pictured here is the Fuego Volcano of Guatemala, it is a day's hike from the base. No climbing needed, but physical condition is needed. The experience compared to many volcanoes worldwide is that you get the opportunity to walk above cloud cover. Also Guatemala is an overall inexpensive vacation hub.", 
elevation: "3,763 m /12,346 ft", location: "Guatemala", ideal_for: "Intermediate hikers, beginners are only recommended if they have serious physical shape." }, 
 
{name: "Mt. Vesuvius", image_url: "https://i.imgur.com/HNmrWrp.jpg", 
content: "Known for it's historical significance with Pompeii, Mt. Vesuvius is the most visited and famous Volcano worldwide ", 
elevation: "1,281 m /4,203 ft", location: "Naples, Italy", ideal_for: "Travelers of all levels of adventure, unlike the grand majority of volcanoes. You just have to take a train/bus. The bus leaves you near the top of Vesuvius from which you can take a 30 minute trail to the top" },

{name: "Kilimanjaro", image_url: "https://i.imgur.com/rHcFR6A.jpg", 
content: "Africa's highest mountain, Kilimanjaro is made up of three volcanic peaks, Kibo, Mawenzi, and Shira. Kibo is the highest peak as well as dormant while the other two are extinct. There is no recoreded eruptions and scientists estimate Kilimanjaro to have last erupted 200,000 years ago.", 
elevation: "5,881 m /19,295 ft", location: "Tanzania", ideal_for: "All travelers although due to it's extreme height, altitude sickness is a commmon concern if precautions are not followed. One of such is to trek the path in a week period to acclimate instead of trekking it in a much shorter time span. But it all pays off as it is just a hike not a climb on Africa's highest mountain." }
])