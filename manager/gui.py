import sys,os, time, threading
from tkinter import *
from tkinter.ttk import *
from manager.ipa import *
from PIL import ImageTk, Image

def setImage(ipa,mainimg1,mainimg2,root):
    if ipa=="":
        mainload1 = Image.open("image/mouth/The Vocal Tract.gif")
        mainload2 = Image.open("image/lip/viseme_0.jpg")
        mainrender1 = ImageTk.PhotoImage(mainload1)
        mainrender2 = ImageTk.PhotoImage(mainload2)
        mainimg1.configure(image = mainrender1)
        mainimg2.configure(image = mainrender2)
        mainimg1.image = mainrender1
        mainimg2.image = mainrender2
        root.update()
    else:
        path1 = getPathMouth(ipa)
        path2 = getPathLip(ipa)
        mainload1 = Image.open(path1)
        mainload2 = Image.open(path2)
        mainrender1 = ImageTk.PhotoImage(mainload1)
        mainrender2 = ImageTk.PhotoImage(mainload2)
        mainimg1.configure(image = mainrender1)
        mainimg2.configure(image = mainrender2)
        mainimg1.image = mainrender1
        mainimg2.image = mainrender2
        root.update()