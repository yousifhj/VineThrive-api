# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.destroy_all
Category.destroy_all 

plant_a = Plant.create(name: "Chinese Evergreen")
plant_b = Plant.create(name: "ZZ Plant")
plant_c = Plant.create(name: "Marble Pathos")

category_a = Category.create(name: "Big indoor", plant: plant_a)
category_b = Category.create(name: "Easy Care", plant: plant_b)
category_c = Category.create(name: "Vining Plant", plant: plant_c)