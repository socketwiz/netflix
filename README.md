I often like to see a trailer before committing to a show but Netflix has
decided we don't need them.  This bookmarklet will provide a link that will
search IMDB for the title you have selected.  You can then click the link and
watch the trailer on IMDB.  To get this to work, hover over a thumbnail on
Netflix, then click on the down arrow at the bottom of the thumbnail to display
the overview.  From here you can click on the bookmarklet and it will add
a button next to the MY LIST checkbox button labeled IMDB Search.  You can then
click this button and it will open a new window containing the IMDB search.  

### For debugging
Rather than updating your bookmark for every edit, it's easier to pull the code
in from a remote source that you can edit.  Netflix run https so our source
needs to run https as well.  Run the included simple-https-server.py for that,
but you'll need to create a certificate first:  

```
# From this directory run
$ openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
$ python simple-https-server.py
```

Now create a bookmarklet that will pull that in:  
```javascript
javascript: (function bookmarklet() {
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', 'https://localhost:4443/netflix.js');
    document.body.appendChild(jsCode);
}());
```

When you're satisfied with your changes replace the "//your code here" block
with the contents of netflix.js and update your bookmark accordingly.  Now your
bookmarklet will work without the simple-https-server.py running.  
### For production
```javascript
javascript:(function bookmarklet() {
    // your code here
})();
```
