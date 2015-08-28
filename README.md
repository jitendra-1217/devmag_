##### Solution to devmag.io problem statement

###### Requirements:
* Redis
* Mongodb
* NodeJs

###### Setup instructions:

* `bower install`
* `npm install`
* To populate posts collection with sample data - `mongoimport -d dbname -c posts --type csv --file
*devmag_ folder*/fixtures/posts.csv --headerline`
* Edit config in `configs/config.js`

###### Browse:
* `host:port/posts` - Listings of posts
* `host:port/`      - Index page with this same info


###### Snapshot

![alt tag](https://raw.github.com/jitendra-1217/devmag_/master/public/images/comment_section.png)
