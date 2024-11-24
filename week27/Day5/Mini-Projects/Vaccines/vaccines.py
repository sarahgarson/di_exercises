# Vaccines management system
# Your goal is to create a program to help a city with the vaccination of its citizens.

# Part 1
# You will have to create two classes:
# Human
# Queue


# Human
# Represents a citizen of the city, it has the following attributes: id_number (str), name (str), age (int), priority (bool) and blood_type (str). Its blood type can be “A”, “B”, “AB” or “O”.

# This class has no methods.

# class Human:
#     def __init__(self, id_number, name, age, priority, blood_type):
#         self.id_number = id_number
#         self.name = name
#         self.age = age
#         self.priority = priority
#         self.blood_type = blood_type



# Queue
# Represents a queue of humans waiting for their vaccine.
# It has the following attribute : humans, the list containing the humans that are waiting. It is initialized empty.

# This class is useful to manage who will get vaccinated in priority. It has the following methods:

# add_person(self, person) : Adds a human to the queue, if he is older than 60 years old or a priority person, put him at the beginning of the list (at index 0) before every other.

# find_in_queue(self, person) : Returns the index of a human in the queue.

# swap(self, person1, person2): Swaps person1 with person2.

# get_next(self) : Returns the next human waiting in the queue. The next human should be the one located at the index 0 in the list.

# get_next_blood_type(self, blood_type) : Returns the first human with this specific blood type.

# sort_by_age(self) : Sorts the queue
# first the priority people
# then, the older people
# then the younger people
# Every human returned by get_next and get_next_blood_type is removed from the list.
# Those functions return None if the list is empty (ie. no one in the list).

# Bonus: Don’t use any of the following built-in methods: list.insert, list.pop, list.index, list.sort, sorted.


# class Queue:
#     def __init__(self):
#         self.humans = []

#     def add_person(self, person):
#         if person.age > 60 or person.priority:
#             self.humans.insert(0, person)
#         else:
#             self.humans.append(person)

#     def find_in_queue(self, person):
#         for i in range(len(self.humans)):
#             if self.humans[i] == person:
#                 return i
#         return None

#     def swap(self, person1, person2):
#         index1 = self.find_in_queue(person1)
#         index2 = self.find_in_queue(person2)
#         self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

#     def get_next(self):
#         if len(self.humans) == 0:
#             return None
#         return self.humans.pop(0)

#     def get_next_blood_type(self, blood_type):
#         for i in range(len(self.humans)):
#             if self.humans[i].blood_type == blood_type:
#                 return self.humans.pop(i)
#         return None

#     def sort_by_age(self):
#         self.humans.sort(key=lambda x: (x.priority, x.age))




# Part 2
# Human
# Create an attribute family for the Human class.

# Initialized as empty, family is a list of all the humans that are living in the same house with this human.
# Add a method add_family_member(self, person) that adds the person to this human’s family and this human to the person’s family.

class Human:
  def __init__(self, id_number, name, age, priority, blood_type):
    self.id_number = id_number
    self.name = name
    self.age = age
    self.priority = priority
    self.blood_type = blood_type
    self.family = []

  def add_family_member(self, person):
    if person not in self.family:
      self.family.append(person)
      person.family.append(self)
      


# Queue
# Add the rearrange_queue(self) method to the Queue class, so that there won’t be two members of the same family one after the other in the line.

class Queue:
  def __init__(self):
    self.humans = []

  def add_person(self, person):
    if person.age > 60 or person.priority:
      self.humans.insert(0, person)
    else:
      self.humans.append(person)

  def find_in_queue(self, person):
    for i in range(len(self.humans)):
      if self.humans[i] == person:
        return i
    return None

  def swap(self, person1, person2):
    index1 = self.find_in_queue(person1)
    index2 = self.find_in_queue(person2)
    self.humans[index1], self.humans[index2] = self.humans[index2], self.humans[index1]

  def get_next(self):
    if len(self.humans) == 0:
      return None
    return self.humans.pop(0)

  def get_next_blood_type(self, blood_type):
    for i in range(len(self.humans)):
      if self.humans[i].blood_type == blood_type:
        return self.humans.pop(i)
    return None

  def sort_by_age(self):
    self.humans.sort(key=lambda x: (x.priority, x.age))

  def rearrange_queue(self):
    for i in range(len(self.humans) - 1):
      if self.humans[i].family == self.humans[i + 1].family:
        self.humans[i], self.humans[i + 1] = self.humans[i + 1], self.humans[i]


