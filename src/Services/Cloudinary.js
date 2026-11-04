import axios from "axios"
const cloudName = 'g9iq0uix'
const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`
class CloudinaryService {
    async upload(file) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'vAssistant')

        const res = await axios.post(uploadUrl, formData)
        return res.data.secure_url
    }
}

export default new CloudinaryService()