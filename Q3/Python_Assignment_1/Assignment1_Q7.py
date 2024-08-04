s = "   Python is fun!   "

# Remove leading/trailing spaces
stripped_string = s.strip()

# Left justify with *
left_justified = stripped_string.ljust(20, '*')

# Right justify with *
right_justified = stripped_string.rjust(20, '*')

print(stripped_string)
print(left_justified)
print(right_justified)
