
# numbers = "0123456789"
#
# for x in numbers:
#     answer = int(f"28{x}2", 18) + int(f"93{x}5", 12)
#     if answer % 133 == 0:
#         print(x, answer)
#         break
#
# numbers = "012345678"
#
# for x in numbers:
#     for y in numbers:
#         answer = int(f"2{y}66{x}", 9) + int(f"{x}0{y}1", 12)
#         if answer % 170 == 0:
#             print(x, y, answer // 170)

# x = 8 ** 4300 + 4 ** 2017 + 25
# result = bin(x)[2:]
# print(result.count('1'))

# x = 49 ** 7 + 7 ** 20 - 28
# seven = ""
# while x != 0:
#     seven += str(x % 7)
#     x //= 7
#
# seven = seven[::-1]
# print(seven)
# print(seven.count("0"))

# 8 7 6 5 4 3 2 1 0
# 5 7 x 6 9 2 y 1 9
for x in range(40):
    for y in range(40):
        num = 5*(40**8) + 7*(40**7) + x*(40**6) + 6*(40**5) + 9*(40**4) + 2*(40**3) + y*(40**2) + 1*(40**1) + 9*(40**0)

        if num % 39 == 0 and (
            (y*40+x)**0.5 == round((y*40+x)**0.5)
        ):
            print(y*40+x)