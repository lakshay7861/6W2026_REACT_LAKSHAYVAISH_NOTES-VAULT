import { useState } from "react"

const SUPPORT_EMAIL = "notesvault@gmail.com"

const css = `
.fb { background: #f8fdfa; border: 1px solid #d1f0de; border-radius: 12px; padding: 32px; max-width: 720px; margin: 40px auto; }
.fb h3 { color: #0f5132; font-weight: 700; margin: 0 0 6px; }
.fb .sub { color: #6b7280; margin: 0 0 22px; font-size: 0.95rem; }
.fb label { display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 6px; }
.fb input, .fb textarea, .fb select { width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.95rem; font-family: inherit; box-sizing: border-box; background: #fff; margin-bottom: 16px; }
.fb input:focus, .fb textarea:focus, .fb select:focus { outline: none; border-color: #198754; box-shadow: 0 0 0 3px rgba(25,135,84,0.15); }
.fb textarea { min-height: 120px; resize: vertical; }
.fb button { background: #198754; color: #fff; border: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; }
.fb button:hover { background: #0f5132; }
.fb .err { color: #b91c1c; font-size: 0.9rem; margin: -8px 0 12px; }
@media (max-width: 575px) { .fb { padding: 22px 18px; margin: 30px 16px; } }
`

function FeedbackForm() {
    const [form, setForm] = useState({ name: "", email: "", type: "Feedback", message: "" })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        if (!form.name.trim() || !form.message.trim()) {
            setError("Please enter your name and message.")
            return
        }
        if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            setError("Please enter a valid email address.")
            return
        }

        const subject = `[Notes Vault] ${form.type} from ${form.name}`
        const body = `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\nMessage:\n${form.message}`

        window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <>
            <style>{css}</style>
            <section className="fb">
                <h3>Share your feedback</h3>
                <p className="sub">Tell us what you like, what is missing, or report a problem.</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="fb-name">Your name</label>
                    <input id="fb-name" name="name" value={form.name} onChange={handleChange} placeholder="Full name" />

                    <label htmlFor="fb-email">Email</label>
                    <input id="fb-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />

                    <label htmlFor="fb-type">Type</label>
                    <select id="fb-type" name="type" value={form.type} onChange={handleChange}>
                        <option>Feedback</option>
                        <option>Suggestion</option>
                        <option>Bug report</option>
                        <option>Other</option>
                    </select>

                    <label htmlFor="fb-message">Message</label>
                    <textarea id="fb-message" name="message" value={form.message} onChange={handleChange} placeholder="Write your message here..." />

                    {error && <p className="err">{error}</p>}

                    <button type="submit">Send feedback</button>
                </form>
            </section>
        </>
    )
}

export default FeedbackForm