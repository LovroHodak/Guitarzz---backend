MERN GUITAR SHOP

Online guitar shop. Landing page displays all guitars. View button on Card takes you to guitar Detail page. If you press Cart in Navbar you go to Cart page. If you press Logo in Navbar you go to Landing page. If you press Order in Cart page you go to Order page. Once you press Place Order DataBase gets updated and two emails are sent, one to client and one to company. You get redirected to OrderSuccess page.

Style:
App is responsive. From 375px for mobile view up to 1300px for big screen. If screen is bigger then 1300px App will be centered.

Logic:
App.js 
-useEffect(axios/GET) I set(Products and InitialState) with (response.data). Products are being manipulated and InitialState never changes. I use InitialState in Order.js and Cart.js to calculate difference in stock.
-HandleAddToCart/HandleDeleteFromCart changes the value of product.stock property. It also sets BasketItems (displayed in Navbar) and Total.
-HandleOrder is a function invoked in Cart.js when you click Order. It sets order information about products you choose => setOrderData. OrderData is an object that will be used in next step as property orderDetails in AddUserData function.
-AddUserData here is where most of the magic happens. This function is invoked in Order.js when you click Place Order. UserInfo takes personal data that client has to fill in (email, name, lastname, street, city) and 2 propertys which are assigned to states (orderDetails: orderData, total: total). This UserInfo is send with axios/POST. If it is successful it will send Email, called UpdateAllProducts function, setBasketItems to 0, setTotal to 0, setInitialState to new state, setThankYou state, which is just a customers name that we use in orderSuccess, if warning will be true it will switch it to false, and it will push you to OrderSuccess page. If userInfo is uncomplete then Warning will appear in OrderPage saying that you have to fill all info and all actions above are put on hold.
-UpdateAllProducts is axios/PATCH that sends new state of products to server

b. Detail

BACKEND
1. Config - db.config
Connection with DataBase

2. Models
a. product.model
b. order.model
c. mail.model

3. Routes
a. product.routes
/GET/products
/GET/products/:id
/PATCH/products
b. order.routes
/GET/orders
/POST/newOrder
c. nodemailer.routes
/POST/send-email

4. Index.js
Express, cors, bodyParser, path, routes, app.listen



LOVROO!!
When u test on local dont forget to change

MONGO_URI to LOCAL_URI (backend)
CORS from "https://guitarzz.herokuapp.com/" to "http://localhost:3000" (backend)

API_URL = 'https://guitarzz.herokuapp.com' to 'http://localhost:5000' (frontend)







