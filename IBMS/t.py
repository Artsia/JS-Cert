name = "phillip"

def max_String_length(string):
    return (len(string))

print(max_String_length(name)) 



def max_String_length(string):
    return max([len(string),0,9]) #max finds maximun number in iteration or array of numbers

print(max_String_length(name)) 


def max_String_length(string):
    return max(len(s) for s in string)

print(max_String_length(name)) # why do i get 1 instead of 7

def max_String_length(string):
    return (len(s) for s in string)

print(max_String_length(name)) # why do i get a generator object