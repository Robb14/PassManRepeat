export class Category {
    constructor(name) {
        this.name = name
    }
}

export class Site {
    constructor(name, url, user, password, description) {
        this.name = name,
            this.url = url,
            this.user = user,
            this.password = password,
            this.description = description
    }
}