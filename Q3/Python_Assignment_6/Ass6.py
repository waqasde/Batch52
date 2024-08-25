def manage_student_database():
    students = []
    student_id = 1

    while True:
        name = input("Please enter the student's name (or type 'stop' to finish): ")
        if name.lower() == "stop":
            break

        if name in [student[1] for student in students]:
            print("This name is already in the list.")
            continue

        students.append((student_id, name))
        student_id += 1

    print("\nComplete List of Students (Tuples):")
    print(students)

    print("\nList of Students with IDs:")
    for student_id, name in students:
        print(f"ID: {student_id}, Name: {name}")

    num_students = len(students)
    total_name_length = sum(len(name) for _, name in students)
    longest_name_student = max(students, key=lambda x: len(x[1]))
    shortest_name_student = min(students, key=lambda x: len(x[1]))

    print(f"\nTotal number of students: {num_students}")
    print(f"Total length of all student names combined: {total_name_length}")
    print(f"The student with the longest name is: {longest_name_student[1]}")
    print(f"The student with the shortest name is: {shortest_name_student[1]}")

if __name__ == "__main__":
    manage_student_database()