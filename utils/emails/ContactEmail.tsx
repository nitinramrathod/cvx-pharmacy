interface ContactEmailProps {
  type?: string;
  name: string;
  email?: string;
  phone: string;
  service?: string;
  message: string;
}

export const contactEmailTemplate = ({
  type = "contact",
  name,
  email,
  phone,
  service,
  message,
}: ContactEmailProps): string => {
  console.log("Received data:", name);
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Inquiry</title>
    </head>

    <body
      style="margin:0;padding:20px;background-color:#f4f6f9;font-family:Arial,sans-serif;"
    >

      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
      >
        <tr>
          <td align="center">

            <table
              width="600"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="background:#ffffff;border-radius:10px;overflow:hidden;"
            >

              <!-- Header -->
              <tr>
                <td
                  align="center"
                  style="padding:35px 20px;background:#111827;color:#ffffff;"
                >
                  <h1
                    style="margin:0;font-size:28px;font-weight:bold;line-height:36px;"
                  >
                    New Contact Inquiry
                  </h1>

                  <p
                    style="margin:10px 0 0;font-size:14px;opacity:0.8;"
                  >
                    Submitted from your website contact form
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td
                  style="padding:30px 20px;background:#f9fafb;"
                >

                  <p
                    style="font-size:16px;color:#333333;margin:0 0 20px;"
                  >
                    You have received a new inquiry with the following details:
                  </p>

                  <!-- User Details -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin-bottom:20px;"
                  >

                    <tr>
                      <td style="padding:0 0 14px;color:#4b5563;">
                        <strong style="color:#111827;">Type:</strong>
                        ${type}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:0 0 14px;color:#4b5563;">
                        <strong style="color:#111827;">Name:</strong>
                        ${name}
                      </td>
                    </tr>

                    ${
                      email
                        ? `
                    <tr>
                      <td style="padding:0 0 14px;color:#4b5563;">
                        <strong style="color:#111827;">Email:</strong>
                        <a
                          href="mailto:${email}"
                          style="color:#2563eb;text-decoration:none;"
                        >
                          ${email}
                        </a>
                      </td>
                    </tr>
                    `
                        : ""
                    }

                    <tr>
                      <td style="padding:0 0 14px;color:#4b5563;">
                        <strong style="color:#111827;">Phone:</strong>
                        <a
                          href="tel:${phone}"
                          style="color:#2563eb;text-decoration:none;"
                        >
                          ${phone}
                        </a>
                      </td>
                    </tr>

                    ${
                      service
                        ? `
                    <tr>
                      <td style="color:#4b5563;">
                        <strong style="color:#111827;">Service:</strong>
                        ${service}
                      </td>
                    </tr>
                    `
                        : ""
                    }

                  </table>

                  <!-- Message -->
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#ffffff;border:1px solid #dbeafe;border-radius:8px;padding:20px;margin-bottom:20px;"
                  >

                    <tr>
                      <td>

                        <p
                          style="margin:0 0 12px;color:#111827;font-size:16px;font-weight:bold;"
                        >
                          Message
                        </p>

                        <p
                          style="margin:0;color:#4b5563;line-height:1.7;white-space:pre-wrap;word-break:break-word;"
                        >
                          ${message}
                        </p>

                      </td>
                    </tr>

                  </table>

                  <!-- Footer -->
                  <p
                    style="font-size:12px;color:#9ca3af;text-align:center;margin-top:30px;border-top:1px solid #e5e7eb;padding-top:20px;"
                  >
                    This email was generated automatically from your website contact form.
                    <br />
                    © 2026 CVX Pharmacy. All rights reserved.
                  </p>

                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
  </html>
  `;
};