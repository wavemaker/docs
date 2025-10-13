---
title: "XSS antisamy policy configuration"
id: "xss-antisamy-policy-configuration"
---
---

AntiSamy is an HTML, CSS and JavaScript filter for Java that sanitizes user input based on a policy file. AntiSamy is not an HTML, CSS and JavaScript validator. It is merely a way to make sure HTML, CSS and JavaScript input strictly follows rules defined by a policy file.

AntiSamy is a sanitization framework; it is up to the user how it does its sanitization. Using AntiSamy does not guarantee to filter of all malicious code. AntiSamy simply does what is described by the policy file.

## Configuring Your AntiSamy Policy

If the default policy file `wm-xss-policies.xml` doesn’t meet your needs, you can tweak your policy file to your needs and upload. Each section of the policy file is broken down in the next few sections to give the developer background on tweaking the output.

## Policy File Directives 

**`[<directives></directives>]`**

The following table shows the directives, their default values, and their impact on the AntiSamy filtering process.

<table class="reference notranslate"><tbody><tr><td><strong>Directive</strong></td><td><strong>Type</strong></td><td><strong>Default</strong></td><td><strong>Description</strong></td></tr><tr><td>useXHTML</td><td>boolean</td><td>false</td><td>When this feature is on, AntiSamy will output the sanitized data in XHTML format as opposed to just regular HTML</td></tr><tr><td>omitXMLDeclaration</td><td>boolean</td><td>true</td><td>When "omitXMLDeclaration" is turned on, AntiSamy will automatically prepend the XML header to output. Enabling this feature will tell AntiSamy not to do that.</td></tr><tr><td>omitDoctypeDeclaration</td><td>boolean</td><td>true</td><td>When this feature is enabled, AntiSamy will automatically prepend the HTML doctype declaration. By default, AntiSamy will not prepend this header.</td></tr><tr><td>formatOutput</td><td>boolean</td><td>false</td><td>When enabled, AntiSamy will automatically format the output according to some basic rules and indentation. Kind of like "pretty print."</td></tr><tr><td>maxInputSize</td><td>int</td><td>100000</td><td>This directive specifies the maximum size (in bytes) of user input before it's validated.</td></tr><tr><td>embedStyleSheets</td><td>boolean</td><td>true</td><td>When the developer chooses to allow CSS, this directive will specify whether or not remote style sheets found referenced in the user's input will be pulled down and embedded into the current user input.</td></tr><tr><td>maxStyleSheetImports</td><td>int</td><td>1</td><td>This feature allows developers to specify how many remote style sheets can be downloaded from any one input.</td></tr><tr><td>connectionTimeout</td><td>int</td><td>1000</td><td>When "embedStyleSheets" is enabled, this timeout value (in milliseconds) will be used when fetching the offsite resource in question. This should be used to prevent validation threads from blocking when connecting to 3rd party systems that may purposefully act really, really slowly.</td></tr><tr><td>preserveComments</td><td>boolean</td><td>false</td><td>When enabled, AntiSamy will keep HTML comments supplied in the input.</td></tr><tr><td>nofollowAnchors</td><td>boolean</td><td>false</td><td>When enabled, AntiSamy will append rel="nofollow" attributes to all anchor ( <span class="lang:xhtml decode:true crayon-inline ">&lt;a&gt;</span> ) tags supplied in the input. This is useful for telling search engines not to associate your site with sites that are under the control of your users</td></tr><tr><td>validateParamAsEmbed</td><td>boolean</td><td>false</td><td>When enabled, AntiSamy will treat attributes of <span class="lang:xhtml decode:true crayon-inline ">&lt;param&gt;</span> tags in the policy the same as any tags nested inside the <span class="lang:xhtml decode:true crayon-inline ">&lt;embed&gt;</span>. This allows users to, according to policy, pass in data in either of those two methods with equal security. This is needed for sites that allow users to supply videos, etc.</td></tr><tr><td>preserveSpace</td><td>boolean</td><td>false</td><td>When enabled, this feature is intended to preserve spaces as specified in the input without normalization.</td></tr><tr><td>onUnknownTag</td><td>String</td><td>remove</td><td>When this directive is set to "encode," it will encode the tag using HTML entities, instead of removing the tag, which is the default behavior.</td></tr></tbody></table>

## Common Regular Expressions 

**`[<common-regexps> </common-regexps>]`**

You can declare regular expressions here that can be used in the rest of the Policy File. 

### Examples

```js
<regexp name="htmlId" value="[a-zA-Z0-9:-_.]+"/>
```

This regular expression is used to determine whether the text in an id attribute is valid or not.

```js
0-9a-fA-F]{6}|[0-9a-fA-F]{3}))"/>
```

We can define any number of regular expressions and each regex has its unique name to refer to other sections for validating over regex. 

The regexes defined here can be used to.

## Common Attributes 

**`[<common-attributes> </common-attributes>]`**

Here you can declare attributes here that are common to many different tags. Antisamy will match the attribute that encountered on any tag with regexes / literal-list defined for that attribute in this section. If doesn’t match then Antisamy will apply the action defined for that attribute with the **onInvalid** attribute.

Below the schema structure.

```xhtml
onInvalid="">
```

### Attribute

- Name - The name of the attribute (required).
- Description - Description of the attribute (optional ).
- onInvalid - Defines the action to be taken if the value of attribute fails matching (optional, Default : removeAttribute ) and possible actions are [ removeAttribute, encodeTag, filterTag, removeTag ].
    - removeAttribute - Remove the attribute only
    - encodeTag - Encode the tag in which the attribute constitute.
    - filterTag - Remove the tag and children but keep the contents.
    - removeTag - Remove the tag along with the content.

### Regexp-list

Value of the attribute should match all the regexp defined here.

- Regexp
    - Name - The name of the regex that already defined in Common Regular Expressions.
    - Value - Value of regex instead of defining int Common Regular Expressions.

### Literal-list

The value of the attribute should be one of the literal constants defined here.

- Literal
    - Value - Defines the literal constant value of the attribute.

### Example-1

```xhtml
<attribute name="id" description="The 'id' of any HTML attribute should not contain anything besides letters and numbers">
   <regexp-list>
      <regexp name="htmlId"/>
   </regexp-list>
</attribute>
```

And sample html text as follows 
```
<body><p id='$$test'> Test Me </p></body>
```
As id attribute contains `$` it doesn’t match the regex htmlId so it will result as follows for different actions. 

**removeAttribute** 
```
<body><p> Test Me </p></body> 
```
**encodeTag**
```
<body><p id="test"> Test Me </p></body> 
```
**filterTag** 
```
<body> Test Me </body> 
```
**removeTag** 
```
<body> </body>
```
### Example-2

```
<attribute name="shape" description="The 'shape' attribute defines the shape of the selectable area"  onInvalid="encodeTag">
   <literal-list>
      <literal value="default"/>
      <literal value="rect"/>
      <literal value="circle"/>
      <literal value="poly"/>
   </literal-list>
</attribute>
```

Here the media attribute should match the regular expression and it should be in specified literal as well.

:::note
In order to apply these validations on an attribute of the given tag, the attribute should be declared in section OR in under section otherwise that attribute will be removed without applying the attribute validation that defined in common-attributes.
:::

## Global Tag Attributes 

**`[<global-tag-attributes> </global-tag-attributes>]`**

You can declare attributes here that are global to all different tags. 

**Example:** 
```
<attribute name="id"/>
```
The id attribute is global to many different tags.


## Tags to Encode 

**`[<tags-to-encode> </tags-to-encode>]`**

You can declare tags here that will not be removed, filtered, validated or truncated, but encoded using HTML entities. 

**Example:** 

```
   <tag>g</tag>
```
The g tag doesn’t actually do anything, but it isn’t malicious either so we can encode it, rather than remove it.

## Tag Rules 

**`[<tag-rules> </tag-rules>]`**

You can define parsing rules here that will be used for each tag individually. The following section shows what happens to tags according to what actions AntiSamy has decided to perform on it. This will help understand how to build your own tag-rules rules.

- **remove** - Will remove entire tag when it encountered.
- **validate** - Validate the tag attributes based on defined rules.
- **filter** - Filter out the tag and children and preserve the content.
- **truncate** - Remove the content and children but keep the tag.

### Default

Behavior when the tag is not listed in &lt;tag-rules&gt; 

**Input**:
```
<anewtag id="newtag" anewattrib="attrib">Text goes **here**.
```
**Output**: 
```
<div>Text goes <b>here</b>.</div>
```

### Remove

Behavior when the tag-rule action is set to “remove” for given tag. Tag is deleted with all of its child text. 

**Input**:
```
<anewtag id="newtag" anewattrib="attrib">Text goes **here**.
```
**Output**: 
```
<div></div>
```

### Filter

Behavior when the tag-rule action is set to “filter” for given tag. Delete tag, but keep its child text. 

**Input**:
```
<anewtag id="newtag" anewattrib="attrib">Text goes **here**.
```
**Output**: 
```
<div>Text goes <b>here</b>.</div>
```

### Validate

Behavior when the tag-rule action is set to “validate” for given tag. Verify that its attributes and children elements follow rules defined in policy file. 

**Input**:
```
<anewtag id="newtag" anewattrib="attrib">Text goes **here**.
```
**Output**:
```
<div><anewtag id="newtag">Text goes <b>here</b>.</anewtag></div>
```

### Truncate

Behavior when the tag rule action is set to “truncate” for given tag. Keep the element, but remove all attributes. 

**Input**:

```
<div><anewtag id="newtag" anewattrib="attrib">Text goes <b>here</b>.</anewtag></div>
```
**Output**: 
```
<div><anewtag >Text goes <b>here</b>.</anewtag></div>
```
**Example**: 
```
<tag name="html" action="validate"/> 
```
The html tag is included in the clean output after it has been validated that it has been properly used.

## CSS Rules 

**`[<css-rules> </css-rules>]`**

You can define parsing rules here that will be used for each CSS property individually. Only CSS defined in this section is allowed. 

**Example:**
```
<property name="width" default="auto" description="">
     <category-list>
        <category value="visual"/>
     </category-list>
     <literal-list>
        <literal value="auto"/>
        <literal value="inherit"/>
     </literal-list>
     <regexp-list>
        <regexp name="length"/>
        <regexp name="percentage"/>
     </regexp-list>
</property>
```

The CSS width property is allowed only when it matches these rules when used. The value of the width element must be a length, percentage or one of the two literal values “auto” or “inherit”.
