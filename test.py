from pydub import AudioSegment
import os

#wav_file=AudioSegment.from_file("C://Users//ShariQ//Desktop//Python_practice//Project//wavfile//sample1.wav")
def make_wave(wrongfolder,rightfolder):
    
    for file in os.scandir(wrongfolder):

        if (file.path.endswith(".ogg")):
            outfile= rightfolder + os.path.splitext(os.path.basename(file.path))[0]+ ".wav"
        
        AudioSegment.from_file(file.path).export(outfile, format="wav")
        print(f"Creating {outfile}")
    

make_wave("C://Users//ShariQ//Desktop//Project//whatsapp","C://Users//ShariQ//Desktop//Project//right//")

def fn():       # 1.Get file names from directory
    file_list=os.listdir(r"C://Users//ShariQ//Desktop//Project//whatsapp")
    print (file_list)

 #2.To rename files
#fn()