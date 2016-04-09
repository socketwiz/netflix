
### For debugging
```javascript
javascript: (function bookmarklet() {
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src', 'https://localhost:4443/netflix.js');
    document.body.appendChild(jsCode);
}());
```

### For production
```javascript
javascript:(function bookmarklet() {
    // your code here
})();
```
