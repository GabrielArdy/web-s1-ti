class Response {
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static success(message, data) {
        return new Response(200, message, data);
    }
    static created(message, data) {
        return new Response(201, message, data);
    }

    static badRequest(message) {
        return new Response(400, message);
    }

    static unauthorized(message) {
        return new Response(401, message);
    }

    static forbidden(message) {
        return new Response(403, message);
    }

    static notFound(message) {
        return new Response(404, message);
    }

    static conflict(message) {
        return new Response(409, message);
    }

    static internalServerError(message) {
        return new Response(500, message);
    }
}

module.exports = new Response();