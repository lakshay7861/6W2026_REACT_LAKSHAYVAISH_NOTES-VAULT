class AuthService {
    setData(data) {
        localStorage.setItem("user", JSON.stringify(data))
    }

    getData() {
        const data = localStorage.getItem("user")
        return data ? JSON.parse(data) : null
    }

    logout() {
        localStorage.removeItem("user")
    }

    isLoggedIn() {
        return !!this.getData()
    }
}

export default new AuthService()