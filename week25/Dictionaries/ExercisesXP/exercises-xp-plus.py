# 🌟 Exercise 1 : Student Grade Summary
# Instructions
# You are given a dictionary containing student names as keys and lists of their grades as values. Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.



# Initial Data:


# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }


# Requirements:
# Calculate the average grade for each student and store the results in a new dictionary called student_averages.
# Assign each student a letter grade (A, B, C, D, F) based on their average grade according to the following scale, and store the results in a dictionary called student_letter_grades:
# A: 90 and above
# B: 80 to 89
# C: 70 to 79
# D: 60 to 69
# F: Below 60
# Calculate the class average (the average of all students’ averages) and print it.
# Print the name of each student, their average grade, and their letter grade.

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}

for student, grades in student_grades.items():
    student_averages[student] = sum(grades) / len(grades)

student_letter_grades = {}

for student, average in student_averages.items(): 
    if average >= 90:
        student_letter_grades[student] = 'A'
    elif average >= 80:
        student_letter_grades[student] = 'B'
    elif average >= 70:
        student_letter_grades[student] = 'C'
    elif average >= 60:
        student_letter_grades[student] = 'D'
    else:
        student_letter_grades[student] = 'F'

class_average = sum(student_averages.values()) / len(student_averages)

print(f'Class Average: {class_average}')

for student, average in student_averages.items():
    print(f'{student} - Average: {average} - Grade: {student_letter_grades[student]}')




# 🌟 Exercise 2 : Advanced Data Manipulation and Analysis
# Instructions
# In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information about a single purchase.



sales_data = [
     {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
     {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
     {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
     {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
     {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
     {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
     {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
 ]


#Tasks:

#Total Sales Calculation: Calculate the total sales for each product category (i.e., the total revenue generated from each type of product). Use a loop to iterate through the data and a dictionary to store the total sales for each product.

total_sales = {}

for sale in sales_data:
    product = sale['product']
    price = sale['price']
    quantity = sale['quantity']
    total_sales[product] = total_sales.get(product, 0) + (price * quantity)

print(total_sales)

#Customer Spending Profile: Determine the total amount spent by each customer. Use a dictionary to maintain the sum of amounts each customer has spent.

customer_spending = {}

for sale in sales_data:
    customer_id = sale['customer_id']
    price = sale['price']
    quantity = sale['quantity']
    customer_spending[customer_id] = customer_spending.get(customer_id, 0) + (price * quantity)

print(customer_spending)


#Sales Data Enhancement:
# Add a new field to each transaction called “total_price” that represents the total price for that transaction (quantity * price).
# Use a loop to modify the sales_data list with this new information.

for sale in sales_data:
    sale['total_price'] = sale['price'] * sale['quantity']

print(sales_data)

# High-Value Transactions:
# Using list comprehension, create a list of all transactions where the total price is greater than $500.
# Sort this list by the total price in descending order.

high_value_transactions = [sale for sale in sales_data if sale['total_price'] > 500]
high_value_transactions.sort(key=lambda x: x['total_price'], reverse=True)

print(high_value_transactions)

# Customer Loyalty Identification:
# Identify any customer who has made more than one purchase, suggesting potential loyalty.
# Use a dictionary to count purchases per customer, then use a loop or comprehension to identify customers meeting the loyalty criterion.

customer_purchases = {}

for sale in sales_data:
    customer_id = sale['customer_id']
    customer_purchases[customer_id] = customer_purchases.get(customer_id, 0) + 1

loyal_customers = [customer_id for customer_id, purchases in customer_purchases.items() if purchases > 1]

print(loyal_customers)





