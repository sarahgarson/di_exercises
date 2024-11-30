# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

class Circle:
    def __init__(self, radius=None, diameter=None):
        self.radius = radius
        self.diameter = diameter
        if self.radius == None:
            self.radius = self.diameter / 2
        if self.diameter == None:
            self.diameter = self.radius * 2

    def area(self):
        return 3.14 * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius} and diameter: {self.diameter}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __gt__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius

    def __ge__(self, other):
        return self.radius >= other.radius

    def __le__(self, other):
        return self.radius <= other.radius

    def __ne__(self, other):
        return self.radius != other.radius

    def __repr__(self):
        return f"Circle({self.radius})"
    

c1 = Circle(radius=5)
c2 = Circle(diameter=10)
c3 = Circle(radius=2)
c4 = Circle(diameter=4)
c5 = Circle(radius=3)
c6 = Circle(diameter=6)

print(c1)
print(c2)
print(c3)
print(c4)
print(c5)
print(c6)
    
   
        