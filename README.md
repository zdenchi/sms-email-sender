# sms-email-sender

Sending emails and sms through node.js server using message queue and redis.

## Used services

[Email - Resend](https://resend.com)

[SMS - SMSClub](https://smsclub.mobi/)

[MJML - Responsive email][https://mjml.io/]

## How to use

```ts
type SMSPayload = {
  to: string | string[]
  message: string
}

async function sendSms(payload: SMSPayload) {
  const SMSData = {
    type: 'sms',
    data: { ...payload }
  }
  const response = await fetch('/api/sender', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(SMSData)
  })
  const result = await response.json()
  return result
}

type EmailPayload = {
  from: string
  to: string | string[]
  subject: string
  templateName: string
  props?: Record<string, any>
}

async function sendEmail(payload: EmailPayload) {
  const emailData = {
    type: 'email',
    data: { ...payload }
  }
  const response = await fetch('/api/sender', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(emailData)
  })
  const result = await response.json()
  return result
}
```