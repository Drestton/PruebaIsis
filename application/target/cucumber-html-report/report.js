$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("domainapp/application/bdd/specs/SimpleObjectSpec_listAllAndCreate.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#"
    },
    {
      "line": 2,
      "value": "#  Licensed to the Apache Software Foundation (ASF) under one or more"
    },
    {
      "line": 3,
      "value": "#  contributor license agreements.  See the NOTICE file distributed with"
    },
    {
      "line": 4,
      "value": "#  this work for additional information regarding copyright ownership."
    },
    {
      "line": 5,
      "value": "#  The ASF licenses this file to You under the Apache License, Version 2.0"
    },
    {
      "line": 6,
      "value": "#  (the \"License\"); you may not use this file except in compliance with"
    },
    {
      "line": 7,
      "value": "#  the License.  You may obtain a copy of the License at"
    },
    {
      "line": 8,
      "value": "#"
    },
    {
      "line": 9,
      "value": "#     http://www.apache.org/licenses/LICENSE-2.0"
    },
    {
      "line": 10,
      "value": "#"
    },
    {
      "line": 11,
      "value": "#  Unless required by applicable law or agreed to in writing, software"
    },
    {
      "line": 12,
      "value": "#  distributed under the License is distributed on an \"AS IS\" BASIS,"
    },
    {
      "line": 13,
      "value": "#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied."
    },
    {
      "line": 14,
      "value": "#  See the License for the specific language governing permissions and"
    },
    {
      "line": 15,
      "value": "#  limitations under the License."
    },
    {
      "line": 16,
      "value": "#"
    }
  ],
  "line": 18,
  "name": "List and Create New Simple Objects",
  "description": "",
  "id": "list-and-create-new-simple-objects",
  "keyword": "Feature",
  "tags": [
    {
      "line": 17,
      "name": "@DomainAppDemo"
    }
  ]
});
formatter.before({
  "duration": 2766486445,
  "status": "passed"
});
formatter.before({
  "duration": 145476524,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Existing simple objects can be listed and new ones created",
  "description": "",
  "id": "list-and-create-new-simple-objects;existing-simple-objects-can-be-listed-and-new-ones-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "there are initially 10 simple objects",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I create a new simple object",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "there are 11 simple objects",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 20
    }
  ],
  "location": "SimpleObjectMenuGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "duration": 208494812,
  "status": "passed"
});
formatter.match({
  "location": "SimpleObjectMenuGlue.create_a_simple_object()"
});
formatter.result({
  "duration": 1591809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 10
    }
  ],
  "location": "SimpleObjectMenuGlue.there_are_N_simple_objects(int)"
});
formatter.result({
  "duration": 6523991,
  "status": "passed"
});
formatter.after({
  "duration": 4580417,
  "status": "passed"
});
});