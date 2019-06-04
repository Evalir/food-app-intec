import Client from './Client';
import History from './History';
export default class Auth {
  /**
   * Logs in an user through setting the token in localStorage.
   * @param {string} username
   * User's username.
   * @param {string} password
   * User's password.
   */
  static logIn = async ({ username, password }) => {
    try {
      const req = await Client.post('/api-token-auth/', { username, password });
      console.log(req.status);
      if (req.status === 200) {
        const token = req.data.token;
        this.setToken(token);
        console.log(token);
        return { success: true, username };
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Logs the user out by removing the token.
   */
  static logOut = () => {
    this.destroyToken();
    return true;
  };

  /**
   * Signs up an user through a POST query to the API with the data provided.
   */
  static signUp = async ({
    username,
    password,
    email,
    first_name,
    last_name,
  }) => {
    try {
      console.log(username, password, email, first_name, last_name);
      const req = await Client.post('/api/user/', {
        username,
        first_name,
        last_name,
        email,
        password,
      });
      if (req.status === 201 || req.status === 200) {
        // push to home screen & send notification of created.
        History.push('/');
      }
    } catch (e) {
      console.log(e.response.status);
    }
  };

  /**
   * Checks if user is logged in through the Token in localStorage.
   */
  static isLoggedIn = () => {
    const token = this.getToken();
    console.log(!!token, 'alo?');
    return !!token;
  };

  /**
   * Sets a token into the localStorage.
   * @param {string} token
   * User's secret token.
   */
  static setToken = token => {
    localStorage.setItem('user_token', token);
  };

  /**
   * Remove token from localStorage.
   */
  static destroyToken = () => {
    localStorage.removeItem('user_token');
  };

  /**
   * Gets the token from localStorage.
   */
  static getToken = () => {
    return localStorage.getItem('user_token');
  };
}
