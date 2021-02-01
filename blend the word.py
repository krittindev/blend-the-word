import sys,os, time, threading
from tkinter.ttk import *
from tkinter import messagebox
from PIL import ImageTk, Image
from playsound import playsound
from manager.ipa import *
from manager.gui import *
from gtts import gTTS
import eng_to_ipa as ipa
import sys,os, time, threading

#* FUNCTION 
def creatSound(word,pathfilename):
    temp = mainl2['text']
    mainl2.configure(text = "กำลังเชื่อมต่อกับ \nGoogle Text-to-Speech...\nความเร็วขึ้นอยู่กับอินเทอร์เน็ต")
    root.update()
    tts = gTTS(text=word, lang='en-uk')
    tts.save(pathfilename)
    playsound(pathfilename)
    mainl2.configure(text = temp)
    root.update()
def spellActionIPA(key):
    ipa = key
    global contentimg1,contentimg2
    # change image
    setImage(ipa,contentimg1,contentimg2,root)
    # play sound
    folder="phonics-Oxford/"
    name=ipaConversion(ipa,option="ipaToSound")
    playsound("sound/"+folder+name+".mp3")
def spellAction():
    word = maine1.get().lower()
    global mainimg1,mainimg2
    if (not ipa.isin_cmu(word))or(word==""):
        messagebox.showwarning ("คำเตือน", "ไม่พบคำนี้ในฐานข้อมูล")
    else:
        mainl2.configure(text = "/"+ipa.convert(word)+"/")
        textIPA = ipaConversion(ipa.convert(word))
        for i in ipaConversion(ipa.convert(word),"cmuToListIPA"):
            # change image
            setImage(i,mainimg1,mainimg2,root)
            # play sound
            folder="phonics-Oxford/"
            name=ipaConversion(i,option="ipaToSound")
            playsound("sound/"+folder+name+".mp3")
            if i!=0:
                time.sleep(sleep)
        setImage("",mainimg1,mainimg2,root)
def readAction():
    word = maine1.get().lower()
    folder = "word"
    if (not ipa.isin_cmu(word))or(word==""):
        messagebox.showwarning ("คำเตือน", "ไม่พบคำนี้ในฐานข้อมูล")
    else:
        mainl2.configure(text = "/"+ipa.convert(word)+"/")
        pathfilename = "%s" % os.path.join("sound"+"/"+folder+"/"+word+".mp3")
        if(os.path.isfile(pathfilename)):
            playsound(pathfilename)
        else:
            creatSound(word,pathfilename)
def spellAndReadAction():
    word = maine1.get().lower()
    folder = "word"
    global mainimg1,mainimg2
    if (not ipa.isin_cmu(word))or(word==""):
        messagebox.showwarning ("คำเตือน", "ไม่พบคำนี้ในฐานข้อมูล")
    else:
        mainl2.configure(text = "/"+ipa.convert(word)+"/")
        textIPA = ipaConversion(ipa.convert(word))
        for i in ipaConversion(ipa.convert(word),"cmuToListIPA"):
            # change image
            setImage(i,mainimg1,mainimg2,root)
            # play sound
            folder="phonics-Oxford/"
            name=ipaConversion(i,option="ipaToSound")
            playsound("sound/"+folder+name+".mp3")
            if i!=0:
                time.sleep(sleep)
        setImage("",mainimg1,mainimg2,root)
        readAction()
def mainBtAction():
    mainFrame.grid(row=0, column=1)
    contentFrame.grid_forget()
    aboutFrame.grid_forget()
def contentBtAction():
    mainFrame.grid_forget()
    contentFrame.grid(row=0, column=1)
    aboutFrame.grid_forget()
def aboutBtAction():
    mainFrame.grid_forget()
    contentFrame.grid_forget()
    aboutFrame.grid(row=0, column=1)
def exitProgram():
    if messagebox.askyesno("ออกจากโปรแกรม", "คุณต้องการจะออกจากโปรแกรมใช่หรือไม่ ?"):
        root.destroy()
def setStyle():
    Style().theme_settings("clam", {
    "nav1.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "nav2.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "content.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color2)]
        }
    }
    })
    Style().theme_settings("alt", {
    "nav1.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "nav2.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "content.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color2)]
        }
    }
    })
    Style().theme_settings("default", {
    "nav1.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "nav2.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "content.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color2)]
        }
    }
    })
    Style().theme_settings("classic", {
    "nav1.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "nav2.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color3)]
        }
    },
    "content.TButton": {
        "map": {
            "background": [("active", color1),
                            ("!disabled", color2)]
        }
    }
    })
    Style().theme_use(theme[themeNum])
    Style().configure('nav.TFrame', background=color3)
    Style().configure('main.TFrame', background=colorWhite)
    Style().configure('nav1.TLabel', font=(fontFamily, 50, 'bold'), background=color3, foreground=colorWhite)
    Style().configure('nav2.TLabel', font=(fontFamily, 45, 'bold'), background=color3, foreground=colorWhite)
    Style().configure('nav3.TLabel', font=(fontFamily, 25, 'bold'), background=color3, foreground=colorWhite)
    Style().configure('main1.TLabel', font=(fontFamily, 50, 'bold'), background=colorWhite, foreground=color3)
    Style().configure('main2.TLabel', font=(fontFamily, 25, 'bold'), background=colorWhite, foreground=color1)
    Style().configure('about1.TLabel', font=(fontFamily, 47, 'bold'), background=colorWhite, foreground=color3)
    Style().configure('about2.TLabel', font=(fontFamily, 25, 'bold'), background=colorWhite, foreground=colorBlack)
    Style().configure('about3.TLabel', font=(fontFamily, 20, 'bold'), background=colorWhite, foreground=color2)
    Style().configure('aboutImg.TLabel')
    Style().configure('nav1.TButton', font=(fontFamily, 28, 'bold'), background=color3, foreground=colorWhite,width=12,padding="0 5")
    Style().configure('nav2.TButton', font=(fontFamily, 15, 'bold'), background=color3, foreground=colorWhite,padding="0 5")
    Style().configure('main1.TButton', font=(fontFamily, 25, 'bold'), background=colorWhite,foreground=colorBlack,width=10)
    Style().configure('main2.TButton', font=(fontFamily, 25, 'bold'), background=colorWhite,foreground=colorBlack,width=15)
    Style().configure('content.TButton', font=(fontFamily, 20, 'bold'), background=color2,foreground=colorWhite,width=5)
def setTheme():
    global themeNum
    themeNum = (themeNum+1)%4
    setStyle()
def setColor():
    global color1,color2,color3,colorNum
    colorNum = (colorNum+1)%len(theme1)
    color1=theme1[colorNum]
    color2=theme2[colorNum]
    color3=theme3[colorNum]
    setStyle()

root = Tk()
root.title("สอนอ่านออกเสียงคำภาษาอังกฤษ")
root.iconbitmap(r'image/icon.ico')
root.geometry("1280x720")

sleep = 0.5

#* STYLES
theme = [ 'default','alt', 'clam', 'classic']
theme1 = ["#1565c0","#00695c","#2e7d32","#ef6c00","#c62828","#ad1457","#6a1b9a","#283593"]
theme2 = ["#5e92f3","#439889","#60ad5e","#ff9d3f","#ff5f52","#e35183","#9c4dcc","#5f5fc4"]
theme3 = ["#003c8f","#003d33","#005005","#b53d00","#8e0000","#78002e","#38006b","#001064"]
themeNum=0
colorNum=0
color1=theme1[0]
color2=theme2[0]
color3=theme3[0]
fontFamily=''
colorWhite='#F5F5F5'
colorBlack='#212121'
setStyle()

#* FRAMES
navFrame = Frame(root, style='nav.TFrame',width=260,height=720)
navFrame.grid(row=0, column=0)
navFrame.grid_propagate(0)
mainFrame = Frame(root, style='main.TFrame',width=1020,height=720)
mainFrame.grid(row=0, column=1)
contentFrame = Frame(root, style='main.TFrame',width=1020,height=720)
contentFrame.grid_forget()
aboutFrame = Frame(root, style='main.TFrame',width=1020,height=720)
aboutFrame.grid_forget()

#* NAV ELEMENTS
Label(navFrame, text="สอนอ่าน", style='nav1.TLabel').grid(row=0,column=0)
Label(navFrame, text="ออกเสียง", style='nav2.TLabel').grid(row=1,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=2,column=0)
Button(navFrame, style='nav1.TButton', text="หน้าหลัก",command=mainBtAction).grid(row=3,column=0)
Button(navFrame, style='nav1.TButton', text="เสียงต่างๆ",command=contentBtAction).grid(row=4,column=0)
Button(navFrame, style='nav1.TButton', text="ผู้จัดทำ",command=aboutBtAction).grid(row=5,column=0)
Button(navFrame, style='nav1.TButton', text="ออก",command=exitProgram).grid(row=6,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=7,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=8,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=9,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=10,column=0)
Label(navFrame, text=" ", style='nav3.TLabel').grid(row=11,column=0)
Button(navFrame, text="สี", style='nav2.TButton',command=setColor).grid(row=12,column=0,sticky='SW')
Button(navFrame, text="ธีม", style='nav2.TButton',command=setTheme).grid(row=12,column=0,sticky='SE')

#* MAIN ELEMENTS
mainimg1 = Label(mainFrame)
mainimg2 = Label(mainFrame)
mainimg1.place(x=600, y=100)
mainimg2.place(x=600, y=400)
setImage("",mainimg1,mainimg2,root)
Label(mainFrame,text = " คำศัพท์ ", style='main1.TLabel').place(x=100, y=100)
maine1 = Entry(mainFrame, width=11, font=(fontFamily, 44, 'bold'))
maine1.place(x=100, y=200)
Button(mainFrame,text = " สะกด ", style='main1.TButton',command=spellAction).place(x=100, y=300)
Button(mainFrame,text = " อ่าน ", style='main1.TButton',command=readAction).place(x=320, y=300)
Button(mainFrame,text = " สะกดและอ่าน ", style='main2.TButton',command=spellAndReadAction).place(x=100, y=370)
mainl2 = Label(mainFrame,text = "", style='main2.TLabel')
mainl2.place(x=100, y=450)

#* CONTENT ELEMENTS
contentimg1 = Label(contentFrame)
contentimg2 = Label(contentFrame)
setImage("",contentimg1,contentimg2,root)
Label(contentFrame,text = " เสียงอ่านทั้งหมด ", style='main1.TLabel').place(x=100, y=50)
IPAlist = getIPAList()
xx=50
yy=175
for i in range(len(IPAlist)):
    Button(contentFrame,text = IPAlist[i],command=lambda i=IPAlist[i]:spellActionIPA(i),style='content.TButton').place(x=xx, y=yy)
    xx+=90
    if i%6==5:
        xx=50
        yy+=60
contentimg1.place(x=630, y=50)
contentimg2.place(x=630, y=350)

#* ABOUT ELEMENTS
Label(aboutFrame,text = " ผู้จัดทำ ", style='about1.TLabel').place(x=400, y=50)
aboutload1 = Image.open("image/tiger.jpg")
aboutload2 = Image.open("image/phet.jpg")
aboutrender1 = ImageTk.PhotoImage(aboutload1)
aboutrender2 = ImageTk.PhotoImage(aboutload2)
Label(aboutFrame, image=aboutrender1, style='aboutImg.TLabel').place(x=230, y=150)
Label(aboutFrame, image=aboutrender2, style='aboutImg.TLabel').place(x=570, y=150)
Label(aboutFrame,text = "นาย กฤติน  คุณอารี", style='about2.TLabel').place(x=210, y=450)
Label(aboutFrame,text = "นาย ณฐวรรธ  โพธิ์แก้ว", style='about2.TLabel').place(x=540, y=450)
Label(aboutFrame,text = "เสนอ", style='about3.TLabel').place(x=480, y=540)
Label(aboutFrame,text = "นายวิชัย บัวเนี่ยว    นางสาวรุ่งนภา บุญธรรม", style='about3.TLabel').place(x=290, y=575)
Label(aboutFrame,text = "โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย สตูล 2563", style='about3.TLabel').place(x=250, y=650)

root.update()
root.mainloop()

