import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import * as dwrun from './dweeve/src/exe/dweeve.js';
import * as core from './dweeve/src/functions/core.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dweditor', {static: false}) dweditor: AceEditorComponent;
  @ViewChild('pleditor', {static: false}) pleditor: AceEditorComponent;
  @ViewChild('reditor', {static: false}) reditor: AceEditorComponent;
  @ViewChild('rseditor', {static: false}) rseditor: AceEditorComponent;

  title = 'dweeve-ui';

  public exampleBar = false;
  public resourceNameText = '';
  private examples = {};

  ngOnInit(): void {
    this.createExamples();
  }

  public toggleExampleBar() {
    this.exampleBar = !this.exampleBar;
  }

  ngAfterViewInit() {

    this.dweditor.getEditor().setOptions({ showLineNumbers: true, tabSize: 2 });
    this.dweditor.theme = 'clouds';
    this.dweditor.registerOnChange(() => {this.reDweeve();});

    this.pleditor.getEditor().setOptions({showLineNumbers: true, tabSize: 2 });
    this.pleditor.theme = 'clouds';
    this.pleditor.registerOnChange(() => { this.reDweeve(); });

    this.reditor.theme = 'clouds';
    this.reditor.getEditor().setOptions({showLineNumbers: true, tabSize: 2 });

    this.rseditor.theme = 'clouds';
    this.rseditor.getEditor().setOptions({showLineNumbers: true, tabSize: 2 });
    this.rseditor.registerOnChange(() => { this.reDweeve(); });
    this.toggleExampleBar();
    this.loadExample('Simple function');

  }

  reDweeve() {
    core.setResourceFileContent(this.resourceNameText, this.rseditor.text);
    this.reditor.text = dwrun.run(this.dweditor.text, this.pleditor.text, '', '');
  }

  public loadExample(name){
    if (this.examples[name]) {
      const example = this.examples[name];
      this.reditor.text = '';
      this.rseditor.text = example.resourceText !== undefined ? example.resourceText : '';
      this.resourceNameText = example.resourceName !== undefined ? example.resourceName : '';
      this.pleditor.text = example.payload !== undefined ? example.payload : '';
      this.dweditor.text = example.dwl !== undefined ? example.dwl : '';

      this.toggleExampleBar();
    }
  }

  private createExamples() {

    this.examples['Simple function'] = { "dwl": `%dw 2.0
fun toUser(obj) = {
  firstName: obj.field1,
  lastName: obj.field2
}
---
toUser(payload)`,
      "payload": `{
  "field1": "Bob",
  "field2": "Jones"
}` };
  

    this.examples['Get people'] = {
    "dwl": `%dw 2.0

output application/json
---
payload.people.person.address.street`,
    "payload":  `{
"people": [
    {
    "person": {
        "name": "Nial",
        "address": {
        "street": {
            "name": "Italia",
            "number": 2164
        },
        "area": {
            "zone": "San Isidro",
            "name": "Martinez"
        }
        }
    }
    },
    {
    "person": {
        "name": "Coty",
        "address": {
        "street": {
            "name": "Monroe",
            "number": 323
        },
        "area": {
            "zone": "BA",
            "name": "Belgrano"
        }
        }
    }
    }
]
}`};



    this.examples['All descendents'] = {
      "dwl": `%dw 2.0
output application/json
---
payload.users..*name`,
"payload":  `{ "users" : {
  "user": {"name":"a"},
  "user": {"name":"b"},
  "user": {"name":"c", "name":"d"}
  }
}`
};

    this.examples['Mixed matching'] = {
  "dwl": `%dw 2.0
---
{
  a: payload.string match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  b: payload.bool match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  c: payload.name match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  d: payload.object match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  e: payload.strings match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  f: payload.object.name match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  g: payload.bangtest match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  h: payload.number match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  }
}`,
"payload":  `{ "string": "hello fred", "number": 90,
      "object" : {"name" : "bob"}, "bool" : true,
      "name" : "Emiliano", "strings" : "strings", "bangtest" : "bang"}`
};


    this.examples['Simple Lambda'] = {
  "dwl": `%dw 2.0
var myLambda = (a,b)-> { (a) : b}
---
myLambda("key","value")`,
"payload":   ``
};

    this.examples['Do scope'] = {
  "dwl": `%dw 2.0
output application/json
fun test(p) = do {
    var a = "Foo" ++ p
    ---
    a
}
---
{ result: test(" Bar") }`,
"payload":  ``
};

    this.examples['Xml input'] = {
  "dwl": `%dw 2.0
output application/xml
---
{
    prices: payload.prices mapObject (value, key) -> {
        (key): (value + 5)
    }
}`,
"payload":  `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>14.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`
};

    this.examples['Recursion!'] = {
      
  "payload": `{
        "command":{
          "version":"1.0.0",
          "user":"ian",
          "commandDate":"2019-10-20T11:15:30",
          "response":[
            {
              "object":{
                "type":"policyHeader",
                "schema":"policyHeader",
                "schemaVersion":"1.0.0",
                "commandId":"PH001",
                "content":{
                  "polifcyRef":"xyz-124",
                  "inceptionDate":"2019-11-01T00:00:00",
                  "expiryDate":"2020-10-31T23:59:59"
                }
              }
            },
            {
              "object":{
                "type":"customer",
                "schema":"customer",
                "schemaVersion":"1.0.0",
                "commandId":"CU001",
                "content":{
                  "extRef":"sf00001abc"
                }
              }
            },
            {
              "object":{
                "type":"broker",
                "schema":"broker",
                "schemaVersion":"1.0.0",
                "commandId":"BR001",
                "content":{
                  "brokerRef":"br00111"
                }
              }
            },
            {
              "object":{
                "type":"coverage",
                "schema":"coverage",
                "schemaVersion":"1.0.0",
                "commandId":"CV001",
                "content":{
                  "coverageRef":"covRef00111"
                }
              }
            },
            {
              "object":{
                "type":"insuredObject",
                "schema":"insuredObject",
                "schemaVersion":"1.0.0",
                "commandId":"IO001",
                "content":{
                  "insuredType":"motor",
                  "make":"Ford",
                  "model":"Fiesta",
                  "engine": "2.0"
                }
              }
            },
            {
              "object":{
                "type":"insuredObject",
                "schema":"insuredObject",
                "schemaVersion":"1.0.0",
                "commandId":"IO002",
                "content":{
                  "insuredType":"property",
                  "description":"office",
                  "fire":"yes"
                }
              }
            },
            {
              "relation":{
                "from":"PH001",
                "to":"CU001",
                "rType":"belongsTo"
              }
            },
            {
              "relation":{
                "from":"CU001",
                "to":"PH001",
                "rType":"hasPolicy"
              }
            }
          ]
        }
      }`,
      "resourceText":  `{
        "view":{
          "name":"motorPolicy-quote",
          "version":"1.0.0",
          "viewStyle":"hierarchy",
          "viewElement":{
            "object":"policyHeader",
            "elementRef":"PH001",
            "childObjects":[
              {
                "viewElement":{
                  "object":"customer",
                  "elementRef":"CU001",
                  "multiplicity":"single",
                  "relationFromParent":"belongsTo",
                  "relationToParent":"hasPolicy"
                }
              },
              {
                "viewElement":{
                  "object":"broker",
                  "elementRef":"BR001",
                  "multiplicity":"single",
                  "relationFromParent":"managedBy",
                  "relationToParent":"managesPolicy"
                }
              },
              {
                "viewElement":{
                  "object":"coverage",
                  "elementRef":"CV001",
                  "multiplicity":"oneOrMore",
                  "relationFromParent":"hasCover",
                  "relationToParent":"coveredBy",
                  "relationToOther":{
                    "elementRef":"C001",
                    "type":"hasCover"
                  },
                  "childObjects":[
                    {
                      "viewElement":{
                        "object":"insuredObject",
                        "elementRef":"IO001",
                        "multiplicity":"oneOrMore",
                        "relationFromParent":"covers",
                        "relationToParent":"coveredBy"
                      }
                    },
                    {
                      "viewElement":{
                        "object":"insuredObject",
                        "elementRef":"IO002",
                        "multiplicity":"oneOrMore",
                        "relationFromParent":"covers",
                        "relationToParent":"coveredBy"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      }`,
      "resourceName":  'classpath://dw/data/view-metadata-policyHeader.json',
      "dwl":  `%dw 2.0
    output application/json
    
    var policyHeaderView = readUrl("classpath://dw/data/view-metadata-policyHeader.json")
    
    fun findObjectContent(objectType, commandId) = {
         (objectType): payload.command.response filter ($.object.schema == objectType and $.object.commandId == commandId) map (object , index) ->
            object.object.content
    }
    
    fun findRelation(relation, relationFrom, relationType) = 
      (relation filter (($.from == relationFrom) and ($.rType == relationType))).to
    
    fun renderChildObjects(childObjectsArray) = {
      children: childObjectsArray map ((child, childIndex) -> {
        (child.viewElement.object) : findObjectContent(child.viewElement.object, child.viewElement.elementRef),
        (if (child.viewElement.childObjects != null) 
           renderChildObjects(child.viewElement.childObjects) else {}
        )
      }
      )
    }
    
    var firstViewElement = policyHeaderView.view.viewElement
    ---
    
    
    {
      (findObjectContent(firstViewElement.object, firstViewElement.elementRef)),
      (if (firstViewElement.childObjects != null) renderChildObjects(firstViewElement.childObjects) else {})
        //relation: findRelation(payload.command.response.relation, "PH001", policyHeaderView.view.viewElement.childObjects.viewElement[0].relationFromParent),
    }`};

}

}
