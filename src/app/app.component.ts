import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import * as dwrun from './dweeve/src/exe/dweeve.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('dweditor', {static: false}) dweditor: AceEditorComponent;
  @ViewChild('pleditor', {static: false}) pleditor: AceEditorComponent;
  @ViewChild('reditor', {static: false}) reditor: AceEditorComponent;
  
  title = 'dweeve-ui';

  public exampleBar = false;

  ngOnInit(): void {
  
  }

  public toggleExampleBar() {
    this.exampleBar = !this.exampleBar;
  }

  ngAfterViewInit() {

    this.dweditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });


    this.dweditor.theme = 'clouds';
    this.dweditor.text = `%dw 2.0
    var a = 2 * 3 + 4
    var b = 2 + 3 * 4
    ---
    {a:a, b: b}
    `;
    this.dweditor.registerOnChange(() => {
      this.reDweeve();
    });

    this.pleditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.pleditor.theme = 'clouds';
    this.pleditor.text = `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>9.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`;

    this.pleditor.registerOnChange(() => {
      this.reDweeve();
    });

    this.reditor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

   
    this.reditor.theme = 'clouds';
    this.reDweeve();

    
  }

  reDweeve() {
    this.reditor.text = dwrun.run(this.dweditor.text, this.pleditor.text, '', '');
  }

  public loadExample(exName){
    if (exName === 'Simple function') {
      this.dweditor.text = `%dw 2.0
fun toUser(obj) = {
  firstName: obj.field1,
  lastName: obj.field2
}

---
toUser(payload)`;
      this.pleditor.text = `{
  "field1": "Bob",
  "field2": "Jones"
}`;
    }
  

    if (exName === 'Get people') {
    this.dweditor.text = `%dw 2.0

output application/json
---
payload.people.person.address.street`;
    this.pleditor.text = `{
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
}`;
}


    if (exName === 'All descendents') {
      this.dweditor.text = `%dw 2.0
output application/json
---
payload.users..*name`;
      this.pleditor.text = `{ "users" : {
  "user": {"name":"a"},
  "user": {"name":"b"},
  "user": {"name":"c", "name":"d"}
  }
}`;
}

    if (exName === 'Mixed matching') {
      this.dweditor.text = `%dw 2.0
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
}`;
      this.pleditor.text = `{ "string": "hello fred", "number": 90,
      "object" : {"name" : "bob"}, "bool" : true,
      "name" : "Emiliano", "strings" : "strings", "bangtest" : "bang"}`;
}


    if (exName === 'Simple Lambda') {
      this.dweditor.text = `%dw 2.0
var myLambda = (a,b)-> { (a) : b}
---
myLambda("key","value")`;
      this.pleditor.text = ``;
}

    if (exName === 'Do scope') {
      this.dweditor.text = `%dw 2.0
output application/json
fun test(p) = do {
    var a = "Foo" ++ p
    ---
    a
}
---
{ result: test(" Bar") }`;
      this.pleditor.text = ``;
}

    if (exName === 'Xml input') {
      this.dweditor.text = `%dw 2.0
output application/xml
---
{
    prices: payload.prices mapObject (value, key) -> {
        (key): (value + 5)
    }
}`;
      this.pleditor.text = `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>14.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`;
}
}

}
