This is a single page application that allows a user with a click of a button to select random plants. The user will have the option to delete the plant that was randomly choosen if they choose.
It utalized Rails API as server and JavaScript as the client. It showcases fetch requests from the client to the server to render menu items to the DOM, create new items to the database via POST requests, and delete items from server via DELETE requests.

Installation:

1. Fork and clone this repository, and then within the main directory execute

``` $ bundle install
    $ rake db:migrate ```

2. Seed some data to start with:

``` $ rake db:seed ```

3. Then run:

``` $ rails s ```

4. Open up a new browser tab and navigate to:

``` localhost:3000 ```

Contributors

Contributions are welcome, and can be made by either opening an issue or making a pull request to this repo.
