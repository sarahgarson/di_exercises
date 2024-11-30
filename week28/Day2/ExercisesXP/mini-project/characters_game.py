# Description
# Create a class called Character with the following attributes and methods:
# attribute name
# attribute life – starts with a default value of 20
# attribute attack – the base attack of a character (integer) will be a default of 10
# method basic_attack() - accepts another Character instance as a parameter. Your character will <attack> the other character so his <life> points should drop.

class Character:
    def __init__(self, name):
        self.name = name
        self.life = 20
        self.attack = 10
        print(f"{self.name} has been created")

    def basic_attack(self, other_char):
        other_char.life -= self.attack
        print(f"{self.name} attacked {other_char.name} for {self.attack} damage")



# Instructions
# Now create 3 different classes that inherit from Character:
# Every character type should say (ie. print) something when they are created, get creative :)

# Druid:
# meditate() - increases life by 10, decrease attack by 2
# animal_help()- increases attack by 5
# fight() - accepts another Character instance as a parameter and subtracts (0.75*life + 0.75*attack) from the other character’s life.
# Example:
# druid.fight(other_char): other_char.life - (0.75*self.life + 0.75*self.attack)

class Druid(Character):
    
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is ready to protect the forest")
        print(f"{self.name} is a Druid")

    def meditate(self):
        self.life += 10
        self.attack -= 2
        print(f"{self.name} meditated")

    def animal_help(self):
        self.attack += 5
        print(f"{self.name} got help from an animal")

    def fight(self, other_char):
        other_char.life -= (0.75*self.life + 0.75*self.attack)
        print(f"{self.name} fought {other_char.name}")
        

# Warrior:
# brawl() - accepts another Character instance as a parameter, subtracts (2*attack) to the other characters life and adds (0.5*attack) to his own life.
# train() - increases both your attack and life points by 2.
# roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.

class Warrior(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is ready to fight")
        print(f"{self.name} is a Warrior")

    def brawl(self, other_char):
        other_char.life -= 2*self.attack
        self.life += 0.5*self.attack
        print(f"{self.name} brawled with {other_char.name}")

    def train(self):
        self.attack += 2
        self.life += 2
        print(f"{self.name} trained")

    def roar(self, other_char):
        other_char.attack -= 3
        print(f"{self.name} roared at {other_char.name}")

# Mage:
# curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.
# summon() - increases attack attribute by 3 points.
# cast_spell() - accepts another Character instance as a parameter and subtracts attack/life to the other character’s life points (eg if your attack is 20 and life is 5 you will subtract 4 life points).

class Mage(Character):
    def __init__(self, name):
        super().__init__(name)
        print(f"{self.name} is ready to cast spells")
        print(f"{self.name} is a Mage")

    def curse(self, other_char):
        other_char.attack -= 2
        print(f"{self.name} cursed {other_char.name}")

    def summon(self):
        self.attack += 3
        print(f"{self.name} summoned something")

    def cast_spell(self, other_char):
        other_char.life -= self.attack/5
        print(f"{self.name} cast a spell on {other_char.name}")

# Once all your classes are created start testing them, create one of each character and use each of their method.

druid = Druid("John")
warrior = Warrior("Phillip")
mage = Mage("Tyra")

druid.basic_attack(warrior)
warrior.brawl(mage)
mage.cast_spell(druid)

druid.meditate()
warrior.train()
mage.summon()

druid.fight(warrior)
warrior.roar(mage)
mage.curse(druid)
