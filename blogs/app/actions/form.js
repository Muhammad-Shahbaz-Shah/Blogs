"use server";
import nodemailer from "nodemailer";

export const handleform = async (data) => {
  try {
    // Gmail SMTP Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // use TLS
      auth: {
        user: "syedshahbazshah7571@gmail.com",
        pass: "powp emwe ngzv mnmx", // App Password (not real Gmail password)
      },
    });

    // Form data
   

    // Send Email
    const info = await transporter.sendMail({
      from: `"${data.username}" <${data.email}>`, // user ke email se send
      replyTo: data.email, // reply directly to user
      to: "syedshahbazshah7571@gmail.com", // tumhara inbox 
      subject: "Blogs - User Contact",
      text: data.message,
      html: `<p><strong>From:</strong> ${data.username} (${data.email})</p>
             <p>${data.message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};
    