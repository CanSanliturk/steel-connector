# Steel Connector

* I aim this project to be used by structural engineers that design steel structures.
  * Model Tab -> Steel connection modelling. Users should be able to model their connections with all necessary details and define actions (loads) on them
  * Analysis Tab -> This will be the tab where user can run a finite element analysis on their steel connection model
  * Check Tab -> This is planned to be the best friend of a structural engineer. A design code check algorithm will user the physical and analytical data, and analysis results in order to tell an engineer whether their steel connection passes the design code or not.

* Currently, I am working on a simple web interface using react.
* Analysis will run on a microservice and finite element analysis engine will be in C++.
* Design check algorithm will run on another microservice. Java might be good choice here

* For building frontend part, go to https://github.com/CanSanliturk/steel-connector/blob/main/front-end/README.md
