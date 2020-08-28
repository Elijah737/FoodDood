require("dotenv").config();
express = require("express");
massive = require("massive");
session = require("express-session");

const{ SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;
const authCtrl = require("./controllers/authController");
const busCtrl = require("./controllers/businessController");
const app = express();


app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxage: 1000 * 60 * 60 * 24 * 15,
        },
    })
);

massive ({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
})
    .then((db) => {
        app.set("db", db);
        console.log("-----DATABASE CONNECTED-----");
    })
    .catch((err) => console.log(`Dstabase error: ${err}`));


    app.post("/auth/register", authCtrl.register);
    app.post("/auth/login", authCtrl.login);
    app.post("/auth/logout", authCtrl.logout);
    app.get("/auth/user", authCtrl.getUser);

    app.post("/business/register", busCtrl.register);
    app.post("/business/login", busCtrl.login);
    app.post("/business/logout", busCtrl.logout);
    app.get("/business/business", busCtrl.getBusiness);
    // app.put("/business/business/:id", busCtrl.editBusiness)


    app.listen(SERVER_PORT, () => console.log(`-----PORT ${SERVER_PORT} ONLINE-----`));