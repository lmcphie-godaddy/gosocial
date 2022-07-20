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
    
def sendEmailWithAttach(Subject, emailBody, file_content, file_name):
    import os
    import smtplib
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
    dir_path = r'gifts'
    sticker_count = len([entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))])
    file_names = [entry for entry in os.listdir(dir_path) if os.path.isfile(os.path.join(dir_path, entry))]# _ = 0
    for _ in file_names:
        file_content = "gifts/" + file_names[sticker_count - 1]
        attachment = open(file_content,'rb')
        part = email.mime.base.MIMEBase('application', "octet-stream")
        part.set_payload(attachment.read())
        email.encoders.encode_base64(part)
        part.add_header('Content-Disposition', 'attachment; filename="%s.jpg"' %file_name)
        msg.attach(part)
        sticker_count -= 1

    
    msg['Subject'] = Subject
    msg['From'] = 'lmcphie@godaddy.com' 
    msg['To'] = 'lmcphie@godaddy.com'
        
    smtpServer = smtplib.SMTP('relay.godaddy.com')
    smtpServer.sendmail(msg['From'],msg['To'],msg.as_string())
    smtpServer.quit()
    print ("Congratulations has been sent!")
        
if __name__ == '__main__':
    body = "We've created a gift just for you!\nBe proud and share it with your community!\nCelebrate your accomplishments with GoDaddy to the world, we hope your success continues!"
    sendEmailWithAttach("Congratulations On Your First Domain!", body, "gifts/test.jpg", "milestone")