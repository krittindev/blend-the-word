import sys,os, time, threading
from tkinter import *
from tkinter.ttk import *
from tkinter import messagebox
import eng_to_ipa as ipa
from PIL import ImageTk, Image

def getIPAList():
    return ["æ","eɪ","ɛr","b","ʧ","d","ɛ","i","f","h","aɪ","ʤ","l","m","n","ŋ","u","ʊ","aʊ","p","r","s","ʃ","t","θ","ð","v","w","z","ʒ","oʊ","ɑ","ɑr","ə","ər","g","gz","ɪ","ɪr","k","ks","kw","j","ju","jʊr","ɔ","ɔr","ɔɪ"]

def ipaConversion(key,option="cmuToTextIPA"):
    ipa2sound = {"æ":"a","eɪ":"ai","ɛr":"air","b":"b","ʧ":"ch","d":"d","ɛ":"e","i":"ee","f":"f","h":"h","aɪ":"igh","ʤ":"j","l":"l","m":"m","n":"n","ŋ":"ng","u":"oo","ʊ":"uu","aʊ":"ow","p":"p","r":"r","s":"s","ʃ":"sh","t":"t","θ":"th","ð":"dh","v":"v","w":"w","z":"z","ʒ":"zh","oʊ":"oa","ɑ":"o","ɑr":"ar","ə":"u","ər":"ur","g":"g","gz":"gz","ɪ":"i","ɪr":"ear","k":"k","ks":"ks","kw":"kw","j":"y","ju":"yoo","jʊr":"yure","ɔ":"o","ɔr":"or","ɔɪ":"oi"}
    ipa2lip = {"æ":"1","eɪ":"4","ɛr":"1","b":"21","ʧ":"16","d":"19","ɛ":"4","i":"6","f":"18","h":"12","aɪ":"11","ʤ":"16","l":"14","m":"21","n":"19","ŋ":"20","u":"7","ʊ":"4","aʊ":"9","p":"21","r":"13","s":"15","ʃ":"16","t":"19","θ":"14","ð":"14","v":"18","w":"7","z":"15","ʒ":"16","oʊ":"8","ɑ":"2","ɑr":"1","ə":"1","ər":"5","g":"20","gz":"20","ɪ":"6","ɪr":"6","k":"20","ks":"20","kw":"20","j":"6","ju":"6","jʊr":"6","ɔ":"2","ɔr":"2","ɔɪ":"10"}
    ipa2mouth = {"æ":"æ","eɪ":"eɪ","ɛr":"ɛr","b":"b","ʧ":"ʧ","d":"d","ɛ":"ɛ","i":"i","f":"f","h":"h","aɪ":"ɑɪ","ʤ":"ʤ","l":"l","m":"m","n":"n","ŋ":"ŋ","u":"u","ʊ":"ʊ","aʊ":"aʊ","p":"p","r":"r","s":"s","ʃ":"ʃ","t":"t","θ":"θ","ð":"ð","v":"v","w":"w","z":"z","ʒ":"ʒ","oʊ":"oʊ","ɑ":"ɑ","ɑr":"ɑr","ə":"ʌ","ər":"ɚ","g":"g","gz":"g","ɪ":"ɪ","ɪr":"i","k":"k","ks":"k","kw":"k","j":"y","ju":"yu","jʊr":"yu","ɔ":"ɑ","ɔr":"ɔr","ɔɪ":"ɔɪ"}
    if option == "cmuToTextIPA":
        newKey = ""
        for i in key:
            if i == "ˈ" or i == "ˌ":
                continue
            newKey += i
        return newKey
    if option == "cmuToListIPA":
        List = list()
        text = ipaConversion(key,option="cmuToTextIPA")
        i=0
        while i < len(text):
            if i+1 < len(text):
                if text[i] == "a" and text[i+1] == "ɪ":
                    List.append("aɪ")
                    i+=2
                    continue
                elif text[i] == "a" and text[i+1] == "ʊ":
                    List.append("aʊ")
                    i+=2
                    continue
                elif text[i] == "e" and text[i+1] == "ɪ":
                    List.append("eɪ")
                    i+=2
                    continue
                elif text[i] == "g" and text[i+1] == "z":
                    List.append("gz")
                    i+=2
                    continue
                elif text[i] == "j" and text[i+1] == "u":
                    List.append("ju")
                    i+=2
                    continue
                elif text[i] == "k" and text[i+1] == "s":
                    List.append("ks")
                    i+=2
                    continue
                elif text[i] == "k" and text[i+1] == "w":
                    List.append("kw")
                    i+=2
                    continue
                elif text[i] == "o" and text[i+1] == "ʊ":
                    List.append("oʊ")
                    i+=2
                    continue
                elif text[i] == "ɑ" and text[i+1] == "r":
                    List.append("ɑr")
                    i+=2
                    continue
                elif text[i] == "ɔ" and text[i+1] == "r":
                    List.append("ɔr")
                    i+=2
                    continue
                elif text[i] == "ɔ" and text[i+1] == "ɪ":
                    List.append("ɔɪ")
                    i+=2
                    continue
                elif text[i] == "ə" and text[i+1] == "r":
                    List.append("ər")
                    i+=2
                    continue
                elif text[i] == "ɛ" and text[i+1] == "r":
                    List.append("ɛr")
                    i+=2
                    continue
                elif text[i] == "ɪ" and text[i+1] == "r":
                    List.append("ɪr")
                    i+=2
                    continue
            if i+2 < len(text):
                if text[i] == "j" and text[i+1] == "ʊ" and text[i+2] == "r":
                    List.append("jʊr")
                    i+=3
                    continue
            List.append(text[i])
            i+=1
        return List
    elif option == "ipaToSound":
        if not key in ipa2sound:
            messagebox.showwarning ("คำเตือน", "ไม่พบเสียง %s"%key)
            return ""
        return ipa2sound[key]
    elif option == "ipaToMouth":
        if not key in ipa2mouth:
            messagebox.showwarning ("คำเตือน", "ไม่พบรูปปาก %s"%key)
            return ""
        return ipa2mouth[key]
    elif option == "ipaToLip":
        if not key in ipa2lip:
            messagebox.showwarning ("คำเตือน", "ไม่พบรูปริมฝีปาก %s"%key)
            return ""
        return "viseme_"+ipa2lip[key]
    
def getPathLip(ipa):
    return "image/lip/"+ipaConversion(ipa,option="ipaToLip")+".jpg"
def getPathMouth(ipa):
    return "image/mouth/"+ipaConversion(ipa,option="ipaToMouth")+".gif"














