import axios from "axios"

const cloudName = "g9iq0uix"
const uploadUrl = `https://api.cloudinary.com/v1_1/g9iq0uix/auto/upload`

class CloudinaryService {
    async upload(file) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "vAssistant")

        try {
            const res = await axios.post(uploadUrl, formData)
            return res.data.secure_url
        } catch (err) {
            // Cloudinary ka asli error message console mein dikhega
            console.log("CLOUDINARY ERROR:", err.response?.data)
            throw err
        }
    }
}

export default new CloudinaryService()