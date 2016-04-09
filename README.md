
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
