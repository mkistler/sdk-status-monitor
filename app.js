const express = require('express');
const nconf = require('nconf');
const log4js = require('log4js');
const adaro = require('adaro');

const logger = log4js.getLogger("APP");
logger.info("Starting");

nconf.env().file({ file: "./config/default.json" });
logger.info(nconf.get());

const app = express();

app.engine("dust", adaro.dust({
	cache: false
}));

app.set("view engine", "dust");
app.set('views', './views');
app.set('port', nconf.get('PORT'));
app.use(express.static('public'));

app.get("/", function(req, res, next){
	res.render("app", nconf.get());
})

// Listen on
app.listen(app.get('port'), function () {
	logger.info("Environment:", app.get('env'));
	logger.info("Listening on port", app.get('port'));
});

