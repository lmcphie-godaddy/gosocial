from turtle import back
from PIL import Image, ImageDraw, ImageFont
#import numpy

# create Image object
text1 = 'Amy\'s'
text2 = 'Bake Shop'

img_name = './exports/xgodaddy.png'
color = 'grey'
font = 'Roboto-Bold.ttf'
solidColor = False
font_color = 'black'


background = Image.open('./assets/xgodaddybg.png')
foreground = None

colors = {
    'dark_blue':{'c':(27,53,81),'p_font':'rgb(255,255,255)','s_font':'rgb(255, 212, 55)'},
    'grey':{'c':(70,86,95),'p_font':'rgb(255,255,255)','s_font':'rgb(93,188,210)'},
    'light_blue':{'c':(93,188,210),'p_font':'rgb(27,53,81)','s_font':'rgb(255,255,255)'},
    'blue':{'c':(23,114,237),'p_font':'rgb(255,255,255)','s_font':'rgb(255, 255, 255)'},
    'orange':{'c':(242,174,100),'p_font':'rgb(0,0,0)','s_font':'rgb(0,0,0)'},
    'purple':{'c':(114,88,136),'p_font':'rgb(255,255,255)','s_font':'rgb(255, 212, 55)'},
    'red':{'c':(255,0,0),'p_font':'rgb(0,0,0)','s_font':'rgb(0,0,0)'},
    'yellow':{'c':(255,255,0),'p_font':'rgb(0,0,0)','s_font':'rgb(27,53,81)'},
    'yellow_green':{'c':(232,240,165),'p_font':'rgb(0,0,0)','s_font':'rgb(0,0,0)'},
    'green':{'c':(65, 162, 77),'p_font':'rgb(217, 210, 192)','s_font':'rgb(0, 0, 0)'}
    }

font_colors = {
    'red': 'rgb(255,0,0)',
    'white': 'rgb(255,255,255)',
    'black': 'rgb(0,0,0)'
}

def add_color(image,c,transparency):
    color = Image.new('RGB',image.size,c)
    mask = Image.new('RGBA',image.size,(0,0,0,transparency))
    return Image.composite(image,color,mask).convert('RGB')

def center_text(img,font,text1,text2,fill1,fill2):
    draw = ImageDraw.Draw(img) # Initialize drawing on the image
    w,h = img.size # get width and height of image
    t1_width, t1_height = draw.textsize(text1, font) # Get text1 size
    t2_width, t2_height = draw.textsize(text2, font) # Get text2 size
    p1 = ((w-t1_width)/2, 40) # H-center align text1
    p2 = ((w-t2_width)/2, 40 + t2_height//1.3) # H-center align text2
    draw.text(p1, text1, fill=fill1, font=font) # draw text on top of image
    draw.text(p2, text2, fill=fill2, font=font) # draw text on top of image
    return img

def add_text(img,color,text1,text2,logo=False,font='Roboto-Bold.ttf',font_size=75):
    draw = ImageDraw.Draw(img)

    if solidColor:
        p_font = color['p_font']
        s_font = color['s_font']
    
    else:
        p_font = s_font = font_colors[font_color]
     
    # starting position of the message
    img_w, img_h = img.size
    font = ImageFont.truetype(font,size=font_size)
    
    center_text(img,font,text1,text2,p_font,s_font)

    return img

def add_logo(background,foreground):
    bg_w, bg_h = background.size
    img_w, img_h = foreground.size
    img_offset = ((bg_w - img_w), (bg_h - img_h))
    background.paste(foreground, img_offset, foreground)
    return background

def write_image(background,color,text1,text2,foreground=''):
    if solidColor:
        background = add_color(background,color['c'],25) #comment this out if you want an image for a background or a simple color
    if not foreground:
        #add_corners(background, 40)
        add_text(background,color,text1,text2)
    else:
        add_text(background,color,text1,text2,logo=True)
        add_logo(background,foreground)
    return background

if __name__ == '__main__':
    background = write_image(background,colors[color],text1,text2,foreground=foreground)
    background.save(img_name) 