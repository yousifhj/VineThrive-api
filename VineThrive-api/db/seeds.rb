# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.destroy_all 
Note.destroy_all 

plant_a = Plant.create(name: "Chinese Evergreen", description: "beautiful", price: 22, light: "low", water: "high")
plant_b = Plant.create(name: "ZZ Plant", description: "perfect fot anyroom", price: 42, light: "medium", water: "high")
plant_c = Plant.create(name: "Marble Pathos", description: "great in anyroom", price: 12, light: "low", water: "low")

note_a = Note.create(body: "Beautiful, lucious plant that is growing very nicely.", plant: plant_a)
note_b = Note.create(body: "Placed plant in northwest corner of livingroom. Plant is flourshing.", plant: plant_b)
note_c = Note.create(body: "Plant did have a few brown leaves. Removed brown leaves and planed in east corster of bedroom.", plant: plant_c)