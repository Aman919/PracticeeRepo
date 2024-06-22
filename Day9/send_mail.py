import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


username='nexaxe21@gmail.com'
password='6280739881'

def send_mail(text='Email body', subject='Hello World', from_email='nexaxe21 <nexaxe21@gmail.com>', to_emails=None):
    assert isinstance(to_emails, list)

    msg = MIMEMultipart('alternative')
    msg['From'] = from_email
    msg['To'] = ", ".join(to_emails)
    msg[subject] = subject
    
    txt_part = MIMEText(text, 'plain')
    msg.attach(txt_part)

    html_part = MIMEText("<h1>This is working</h1>", 'html')
    msg.attach(html_part)

    msg_str=msg.as_string()


    #login to my smtp server
    server = smtplib.SMTP(host='smtp.gmail.com', port=587)
    server.ehlo()
    server.starttls()
    server.login(username, password)
    server.sendmail(from_email, to_emails, msg_str)

    server.quit()