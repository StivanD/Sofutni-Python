name = input()
excluded = 0
grade = 1
overall_score = 0

while True:
    if excluded > 1:
        print(f"{name} has been excluded at {grade} grade")
        break
    
    mark = float(input())

    if 4.00 <= mark <= 6.00:
        overall_score += mark
        if grade == 12:
            print(f"{name} graduated. Average grade: {overall_score / grade:.2f}")
            break
        grade += 1
    elif 2 <= mark < 4:
        excluded += 1