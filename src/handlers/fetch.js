import rest from 'restler-q';
import { SCRAP_SERVER } from '../config.js';

module.exports = {
    post (req, res, next) {
    	const getFetch = rest.postJson(
			SCRAP_SERVER,
			req.body
		).then((result) => {
	      	res.send(result);
	    })
	    .fail((err) => {
	      console.log(err)
	      return next(new Error(err));
	    })

    }
}