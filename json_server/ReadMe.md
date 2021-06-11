<!-- THIS IS A SECTION TO EXPLAIN THE APIs -->

1. A user authenticates with email & group_name
2. Moves into the home category of that group
3. Will then call all the posts related data on that category
   _lazy-load_ all the questions through scrollable UI
4. Once the user clicks on a particular question the comments are loaded also in the _lazy-load_ fashion

```
json-server --watch db.json --port 8000
```
