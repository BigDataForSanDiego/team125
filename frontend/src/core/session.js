export default new Session();

function Session() {
    this.name = "OpenHeart";
    this.version = "0.0.0";

    this.language = "english";
    this.set_language = function (language) {
        this.language = language;
        this.save_session();
    };

    this.get_session_name = function () {
        return `${this.name}Session`;
    };

    this.save_session = function () {
        window.localStorage.setItem(this.get_session_name(), JSON.stringify(this));
    };

    this.load_session = function () {
        let data = window.localStorage.getItem(this.get_session_name());
        if (data) {
            data = JSON.parse(data);
            if (data.version.localeCompare(this.version)) return;

            this.set_language(data.language);
        }
    };

    this.load_session();
}
