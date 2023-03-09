from tkinter import *

def degreesFunction(e):
    radians.delete(0, END)
    grades.delete(0, END)
    radians.insert(0, (float(e.widget.get())*pi)/180)
    grades.insert(0, (float(e.widget.get())*200)/180)

def radiansFunction(e):
    degrees.delete(0, END)
    grades.delete(0, END)
    degrees.insert(0, (float(e.widget.get())*180)/pi)
    grades.insert(0, (float(e.widget.get())*200)/pi)

def gradesFunction(e):
    degrees.delete(0, END)
    radians.delete(0, END)
    degrees.insert(0, (float(e.widget.get())*180)/200)
    radians.insert(0, (float(e.widget.get())*pi)/200)

window = Tk()
window.config(bg="#222")
window.overrideredirect(True)
window.attributes("-topmost", True)
window.geometry("+342+373")
pi = 3.14

degrees = Entry(font=("TkDefaultFont", 15), bg="orange", borderwidth=0, fg="#222", justify="left")
radians = Entry(font=("TkDefaultFont", 15), bg="lime", borderwidth=0, fg="#222", justify="left")
grades = Entry(font=("TkDefaultFont", 15), bg="dodgerblue", borderwidth=0, fg="#222", justify="left")

degreesText = Label(window, text="Degrees ↘", fg="#eee", bg="#222", font=("arial", 15))
radiansText = Label(window, text="Radians ↘", fg="#eee", bg="#222", font=("arial", 15))
gradesText = Label(window, text="Grades ↘", fg="#eee", bg="#222", font=("arial", 15))

equal1 = Label(window, text="=", fg="#eee", bg="#222", font=("arial", 15))
equal2 = Label(window, text="=", fg="#eee", bg="#222", font=("arial", 15))

degrees.bind("<KeyRelease>", degreesFunction)
radians.bind("<KeyRelease>", radiansFunction)
grades.bind("<KeyRelease>", gradesFunction)

degreesText.grid(row=0, column=0)
degrees.grid(row=1, column=0)
equal1.grid(row=1, column=1)
radiansText.grid(row=0, column=2)
radians.grid(row=1, column=2)
equal2.grid(row=1, column=3)
gradesText.grid(row=0, column=4)
grades.grid(row=1, column=4)

window.mainloop()