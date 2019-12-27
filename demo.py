import speech_recognition as sr

r = sr.Recognizer()
with sr.AudioFile("C://Users//ShariQ//Desktop//Project//wavfile//sample2.wav") as source:
    audio = r.record(source)

try:
    s = r.recognize_google(audio)
    print("Text: "+s)
except Exception as e:
    print("Exception: "+str(e))