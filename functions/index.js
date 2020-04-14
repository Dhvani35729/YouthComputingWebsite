const functions = require("firebase-functions");
const express = require("express");

// load the things we need
const app = express();

// set the view engine to ejs
app.set("views", "./views");
app.set("view engine", "ejs");

// index page
app.get("/", function(request, response) {
  response.render("pages/index", {
    name: "index"
  });
});

app.get("/about", function(request, response) {
  response.render("pages/about", {
    name: "about"
  });
});

app.get("/recent", function(request, response) {
  response.render("pages/recent", {
    name: "news"
  });
});

app.get("/workshops", function(request, response) {
  response.render("pages/workshops", {
    name: "workshops"
  });
});

app.get("/stempower", function(request, response) {
  response.render("pages/stempower", {
    name: "STEMpower"
  });
});

app.get("/stempower17", function(request, response) {
  response.render("pages/stempower17", {
    name: "STEMpower17"
  });
});

app.get("/stempower18", function(request, response) {
  response.render("pages/stempower18", {
    name: "STEMpower18"
  });
});

app.get("/stempower19", function(request, response) {
  response.render("pages/stempower19", {
    name: "STEMpower19"
  });
});

app.get("/fuse", function(request, response) {
  response.render("pages/fuse", {
    name: "fuse"
  });
});

app.get("/fuse17", function(request, response) {
  response.render("pages/fuse17", {
    name: "fuse17"
  });
});

app.get("/fuse19", function(request, response) {
  response.render("pages/fuse19", {
    name: "fuse19"
  });
});

app.get("/ccd", function(request, response) {
  response.render("pages/ccd", {
    name: "CCD"
  });
});

app.get("/lwb", function(request, response) {
  response.render("pages/lwb", {
    name: "LWB"
  });
});
app.get("/junto", function(request, response) {
  response.render("pages/junto", {
    name: "junto"
  });
});

app.get("/contact", function(request, response) {
  response.render("pages/contact", {
    name: "contact"
  });
});

exports.app = functions.https.onRequest(app);
