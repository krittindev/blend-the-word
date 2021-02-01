from tkinter import *
#สร้างหน้าต่าง
root=Tk()
root.title("โปรแกรมแปลงหน่วย")
root.geometry("640x640")

def program():
    f1.pack_forget()
    f2.pack()

def creater():
    f1.pack_forget()
    f3.pack()
    
def teacher():
    f1.pack_forget()
    f4.pack()
    
def back1():
    f2.pack_forget()
    f1.pack()
    
def back2():
    f3.pack_forget()
    f1.pack()
    
def back3():
    f4.pack_forget()
    f1.pack()
    
def cal_millimeter():
    global en_count,result_var
    count=int(en_count.get())
    result=(count*10)
    result_var.set("ผลลัพธ์ = "+str(result))
def cal_decimeter():
    global en_count,result_var
    count=int(en_count.get())
    result=(count*0.1)
    result_var.set("ผลลัพธ์ = "+str(result))
def cal_meter():
    global en_count,result_var
    count=int(en_count.get())
    result=(count*0.01)
    result_var.set("ผลลัพธ์ = "+str(result))
    
#รวมหน้าต่าง
f1=Frame(root,width=640,height=640)
f2=Frame(root,width=640,height=640)
f3=Frame(root,width=640,height=640,bg="#ff8a80")
f4=Frame(root,width=640,height=640,background='#ff8a80')
f5=Frame(root,width=640,height=640)
         
#หน้าแรก
Label(f1,text="โปรแกรมคำศัพท์น่ารู้",font=("maaja",35)).place(x=180,y=1)
Button(f1,text="โปรแกรม",font=("maaja",20),command=program).place(x=308,y=170)
Button(f1,text="ผู้จัดทำ",font=("maaja",20),command=creater).place(x=318,y=270)
Button(f1,text="เสนอ",font=("maaja",20),command=teacher).place(x=326,y=370)

f1.pack()
#โปรแกรม 
Label(f2,text="หน่วยวัดน้ำหนักระบบเมตริกจากหน่วยเซนติกรัม",bg="Bisque1",fg="black").pack()
Label(f2,text="ค่านำ้หนักมาตราเมตริก").pack()
en_count=Entry(f2).pack()
btn_cal=Button(f2,text="คำนวนค่านำ้หนักที่เป็นหน่วยมิลลิกรัม",bg="Bisque2",command=cal_millimeter)
btn_cal.pack()
btn_cal.config(font=("TlwgTypewriter",20))
btn_cal=Button(f2,text="คำนวณค่านำ้หนักที่เป็นหน่วยเดซิกรัม",bg="Bisque2",command=cal_decimeter)
btn_cal.pack() 
btn_cal.config(font=("TlwgTypewriter",20))
btn_cal=Button(f2,text="คำนวณนำ้หนักเป็นกรัม",bg="Bisque2",command=cal_meter)
btn_cal.pack()
btn_cal.config(font=("TlwgTypewriter",20))
result_var=StringVar(f2)




    
#ผู้จัดทำ
Label(f3,text="คณะผู้จัดทำ\n1.นางสาวพรรภษา  เรืองรุ่งโรจน์ เลขที่ 14 \n2.\นางสาวณิชกุล ชาวสวน เลขที่ 17\n ชั้นมัธยมศึกษาปีที่ 4/4",fg="white",bg="#c85a54",font=("Angsana New",30)).place(x=145,y=200)
Button(f3,text="ย้อนกลับ",font=("maaja",20),command=back2).place(x=155,y=200)

#เสนอ
Label(f4,text="เสนอ\nคุณครูวิชัย  บัวเนี่ยว",fg="black",bg="peachpuff",font=("Angsana New",30)).place(x=200,y=250)
Button(f4,text="ย้อนกลับ",font=("maaja",20),command=back3).place(x=205,y=250)

root.mainloop()