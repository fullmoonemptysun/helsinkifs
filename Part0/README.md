# Part 0 Exercise Solutions

## 0.4 New note diagram
```mermaid
sequenceDiagram
	participant browser
	participant server
	
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
	activate server
    Note left of server: Server takes the input and adds it to the notes list in the server program
	server-->>browser: REDIRECT Location: /exampleapp/notes
	deactivate server
	
	
 browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
	
```
---

## 0.5 Single page app diagram
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
	
```
---
## 0.6 New note in Single page app diagram

```mermaid
sequenceDiagram
	participant browser
	participant server
	Note right of browser: The browser creates a new json note object and adds it to the local list and updates the page (rerender).
    Note right of browser: Then sends the new note as a json object to a new url on the server
	browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
	activate server
    Note right of browser: The server does not respond with a redirect this time and responds with a 201 created code. 
	server-->>browser: {"message": "note created"}
	deactivate server
```

===============x End of exercise
 
 >Finished by: **Vinnie**

 

