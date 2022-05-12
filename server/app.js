const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const session = require("express-session");

// install packages for admin dashboard
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const uploadFeature = require("@adminjs/upload");
AdminJS.registerAdapter(AdminJSMongoose);

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

app.use(express.static(path.join(__dirname, "public")));

// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

require("./models/Admin");
require("./models/Cat");
require("./models/Reservation");
require("./passportConfig");

app.use(passport.initialize());
app.use(passport.session());

const Cat = mongoose.model("Cat");
const Reservation = mongoose.model("Reservation");

const adminJs = new AdminJS({
  resources: [
    {
      resource: Cat,
      options: {
        listProperties: ["_id", "name", "file", "bio", "imgUrl"],
        editProperties: ["name", "file", "bio"],
      },
      features: [
        uploadFeature({
          provider: { local: { bucket: "server/public/catImgs" } },
          properties: {
            key: "imgUrl",
            mimeType: "mimeType", // this property is important because allows to have previews
          },
        }),
      ],
    },
    {
      resource: Reservation,
      options: {
        listProperties: ["_id", "reservationDate", "clientName", "clientEmail"],
        editProperties: ["reservationDate", "clientName", "clientEmail"],
      },
    },
  ],
  rootPath: "/admin/dashboard",
});

const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);

const routes = require("./routes/routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
