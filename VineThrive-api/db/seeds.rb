# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Plant.destroy_all
Category.destroy_all  

viningPlant = Category.create(name: "viningplants")
easyCare = Category.create(name: "easycare")
bigIndoor = Category.create(name: "bigindoor")

Plant.create(name: "ZZ plant", category: easyCare)
Plant.create(name: "Monstera Swiss", category: bigIndoor)
Plant.create(name: "Marble Pathos", category: viningPlant)
Plant.create(name: "Snake plant", category: easyCare)
Plant.create(name: "Fiddle Leaf Indoor", category: bigIndoor)
Plant.create(name: "Monstera Swiss", category: viningPlant)