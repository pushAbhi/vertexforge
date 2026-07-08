import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function POST(request: Request) {
    try {
        const { name, email, phone, subject, message, captchaToken } = await request.json();

        const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

        // Verify reCAPTCHA token
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
            { method: "POST", }
        );
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return Response.json({ error: "ReCaptcha verification failed. Try again." }, { status: 400 });
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "abhay0826r@gmail.com",
            subject: "Hello from Resend!",
            text: "This is a test email sent using Resend.",
            html: `
                    <h1>New Contact Form Submission</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
        });

        return Response.json({ success: true, data });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ error: error }, { status: 500 });
    }
}