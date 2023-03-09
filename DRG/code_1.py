
# from turtle import *
# from turtle import *
# from turtle import *

# color('red')
# speed(110)
# # hideturtle()
# for i in range(10000):
    

# mainloop()
#     # end_fill()
#     # end_fill()
#     # end_fill()

# import turtle
# from tkinter import *
# root = Tk()
# screen = turtle.TurtleScreen(root)
# screen.bgcolor("white")
# t = turtle.Turtle()
# t.forward(100)
# t.right(90)
# t.forward(100)
# root.mainloop()

# import turtle
# import tkinter as tk

# root = tk.Tk()

# canvas = turtle.ScrolledCanvas(root)
# canvas.pack()

# t = turtle.RawTurtle(canvas)
# t.color("blue")
# t.pensize(3)
# t.forward(100)

# root.mainloop()

# import tkinter as tk

# def callback(event):
#     print("Input value: ", event.widget.get())

# root = tk.Tk()

# entry = tk.Entry(root)
# entry.bind("<KeyRelease>", callback)
# entry.pack()

# pencolor('red')
# pensize(5)
# hideturtle()
# pendown()
# left(60)
# forward(200)
# circle(58, 180)
# right(120)
# circle(58, 180)
# forward(200)
# color('red')

# mainloop()

done = False
d = 18
d2 = 180
id = 0
checks = [2,3,5]

while not done:
    if d != 0:
        ans = f'{d/checks[id]}'.find('.0') != -1
        ans2 = f'{d2/checks[id]}'.find('.0') != -1
        if ans and ans2:
            d = d/checks[id]
            d2 = d2/checks[id]
            id = -1
            print(f'{d}/{d2}'.replace('.0', ''))
        if id >= 2:
            done = True
        else:
            id+=1