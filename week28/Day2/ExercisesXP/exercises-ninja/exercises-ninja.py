# Exercise 1 : Temperature
# Instructions
# Write a base class called Temperature.
# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# Each of the subclasses should have a method which can convert the temperture to another type.
# You must consider different designs and pick the best one according to the SOLID Principle.

class Temperature:
    def __init__(self, temp):
        self.temp = temp

    def convert(self, temp):
        pass
    
class Celsius(Temperature):
    def __init__(self, temp):
        super().__init__(temp)
    
    def convert(self, temp):
        if temp == "Fahrenheit":
            return (self.temp * 9/5) + 32
        elif temp == "Kelvin":
            return self.temp + 273.15
        
class Kelvin(Temperature):
    def __init__(self, temp):
        super().__init__(temp)
    
    def convert(self, temp):
        if temp == "Celsius":
            return self.temp - 273.15
        elif temp == "Fahrenheit":
            return (self.temp - 273.15) * 9/5 + 32
        
class Fahrenheit(Temperature):
    def __init__(self, temp):
        super().__init__(temp)
    
    def convert(self, temp):
        if temp == "Celsius":
            return (self.temp - 32) * 5/9
        elif temp == "Kelvin":
            return (self.temp - 32) * 5/9 + 273.15
        
c = Celsius(10)
print(c.convert("Fahrenheit"))
print(c.convert("Kelvin"))
print(c.convert("Celsius"))


# Exercise 2: In the Quantum Realm
# Instructions
# Write a class called QuantumParticle and implement the following:
# The attributes - The particle has an initial position (x), momentum (y) and spin (p)

# The method position() - Position measurement: generate a random position (integer between 1 and 10,000)

# The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)

# The method spin() - Spin measurement: can randomly be 1/2 or -1/2

# Create a method that implements a disturbance. A disturbance occurs each time a measurement is made (e.g. one of the measurements method is called). Disturbance changes the position and the momentum of the particle (randomly generated) and then prints ‘Quantum Interferences!!’

# Implement a meaningful representation of the particle (repr)

# Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them the second one is automatically set to the opposite value. A quantum particle can only be entangled to another quantum particle (check that when you run the method !!)
# Modify as you see fit the attributes and methods of your class to fit the previous definition
# When two particles are entangled print: ‘Spooky Action at a Distance !!’
# >>>p1 = QuantumParticle(x=1,p=5.0)
# >>>p2 = QuantumParticle(x=2,p=5.0)
# >>>p1.entangle(p2)
# >>>'Particle p1 is now in quantum entanglement with Particle p2'
# >>>p1 = QuantumParticle()
# >>>p2 = QuantumParticle()
# >>>p1.entangle(p2)
# >>>'Spooky Action at a Distance'

import random

class QuantumParticle:
    def __init__(self, x=None, p=None, spin_value=None):
        self.x = x
        self.p = p
        self.spin_value = spin_value

    def position(self):
        self.x = random.randint(1, 10000)
        return self.x

    def momentum(self):
        self.p = random.uniform(0, 1)
        return self.p

    def get_spin(self):
        self.spin_value = random.choice([1/2, -1/2])
        return self.spin_value

    def disturbance(self):
        self.x = random.randint(1, 10000)
        self.p = random.uniform(0, 1)
        print("Quantum Interferences!!")

    def __repr__(self):
        return f"Position: {self.x}, Momentum: {self.p}, Spin: {self.spin_value}"

    def entangle(self, particle):
        if isinstance(particle, QuantumParticle):
            if self.spin_value is None:
                self.spin_value = random.choice([1/2, -1/2])
            particle.spin_value = -self.spin_value
            print("Spooky Action at a Distance !!")
        else:
            print("Cannot entangle with non-QuantumParticle")


p1 = QuantumParticle(x=1,p=5.0)
p2 = QuantumParticle(x=2,p=5.0)
p1.entangle(p2)
print(p1)
print(p2)




