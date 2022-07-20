# def sendEmail(Subject, emailBody):
#     import smtplib
#     from email.mime.text import MIMEText

#     msg = MIMEText(emailBody)
#     msg['Subject'] = Subject
#     msg['From'] = 'lmcphie@godaddy.com' 
#     msg['To'] = 'lmcphie@godaddy.com'

#     smtpServer = smtplib.SMTP('relay-app.secureserver.net')
#     smtpServer.sendmail(msg['From'],msg['To'],msg.as_string())
#     smtpServer.quit()
#     print ("Congratulations has been sent!")
    
def sendEmailWithAttach(Subject, emailBody):
    # import os
    import smtplib
    import shutil
    import email
    import email.mime.text
    import email.iterators
    import email.generator
    import email.utils 
    import email.encoders
    import email.mime.multipart
    import email.mime.base
    from email.mime.text import MIMEText
    
    
    msg = email.mime.multipart.MIMEMultipart()
    msg.attach(email.mime.text.MIMEText(emailBody))

    #Attaches file to the message
    # dir_path = r'gifts'
    # sticker_count = len([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))])
    # file_names = sorted([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))])
    # for _ in file_names:
    #     file_content = "gifts/" + file_names[sticker_count - 1]
    #     attachment = open(file_content,'rb')
    #     part = email.mime.base.MIMEBase('application', "octet-stream")
    #     part.set_payload(attachment.read())
    #     email.encoders.encode_base64(part)
    #     file_name = _[:len(_)-4]
    #     if _[len(_)-4:] == ".png":
    #         part.add_header('Content-Disposition', 'attachment; filename="%s.png"' %file_name)
    #     if _[len(_)-4:] == ".gif":
    #         part.add_header('Content-Disposition', 'attachment; filename="%s.gif"' %file_name)
    #     if _[len(_)-4:] == ".jpg":
    #         part.add_header('Content-Disposition', 'attachment; filename="%s.jpg"' %file_name)
    #     msg.attach(part)
    #     sticker_count -= 1
    
    dir_name = r'gifts'
    output_filename = r'achievements'
    shutil.make_archive(output_filename, 'zip', dir_name)
    part = email.mime.base.MIMEBase("application", "octet-stream")
    part.set_payload(open(output_filename + ".zip", "rb").read())
    email.encoders.encode_base64(part)
    part.add_header("Content-Disposition", "attachment; filename=\"%s.zip\"" % (output_filename))
    msg.attach(part)
    
    msg['Subject'] = Subject
    msg['From'] = 'lmcphie@godaddy.com' #sender
    msg['To'] = 'lmcphie@godaddy.com' #receiver
        
    smtpServer = smtplib.SMTP('relay.godaddy.com')
    smtpServer.sendmail(msg['From'],msg['To'],msg.as_string())
    smtpServer.quit()
    print ("Congratulations has been sent!")
        
if __name__ == '__main__':
    body1 = "Congratulations!!!\n\nWe've created a gift just for you! We're celebrating: \n\n"
    body2 = "   - A year of partnership with GoDaddy.\n\n"
    body3 = "   - Your first domain. The perfect domain lets people know at a glance why you're online (and why you're so awesome).\n\n"
    body4 = "Be proud and share it with your community!\nCelebrate your accomplishments with GoDaddy to the world, we hope your success continues!!!"
    body = body1 + body2 + body3 + body4
    sendEmailWithAttach("Congratulations On Your Success!", body)