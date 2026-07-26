function RegistrationForm () {
    return (
        <form>
            <div>
                <label>Full Name</label>
                <input type="text" />
            </div>

            <div>
                <label>Email</label>
                <input type="email" />
            </div>

            <div>
                <label>Password</label>
                <input type="password" />
            </div>

            <button type="submit">
                Register
            </button>
        </form>
    );
}

export default RegistrationForm;    