import axios from "axios"

const CLOUD_NAME = "g9iq0uix"
const UPLOAD_PRESET = "notesvault_public"
const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`

class CloudinaryService {
    async upload(file) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", UPLOAD_PRESET)

        try {
            const res = await axios.post(uploadUrl, formData)
            console.log("CLOUDINARY SUCCESS:", res.data)
            return res.data.secure_url
        } catch (err) {
            console.log("CLOUDINARY ERROR TEXT:", JSON.stringify(err.response?.data))
            throw err
        }
    }
}

export default new CloudinaryService()