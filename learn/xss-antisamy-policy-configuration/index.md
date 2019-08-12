---
title: "XSS antisamy policy configuration"
date: "2017-02-13"
---

is an HTML, CSS and JavaScript filter for Java that sanitizes user input based on a policy file. AntiSamy is not an HTML, CSS and JavaScript validator. It is merely a way to make sure HTML, CSS and JavaScript input strictly follows rules defined by a policy file.

is a sanitization framework; it is up to the user how it does its sanitization. Using AntiSamy does not guarantee to filter of all malicious code. AntiSamy simply does what is described by the policy file.

**Your AntiSamy Policy**

the default policy file wm-xss-policies.xml doesn’t meet your needs, you can tweak your policy file to your needs and upload. Each section of the policy file is broken down in the next few sections to give the developer background on tweaking the output.

**File Directives \[<directives></directives>\]**

following table shows the directives, their default values, and their impact on the AntiSamy filtering process.

this feature is on, AntiSamy will output the sanitized data in XHTML format as opposed to just regular HTML

"omitXMLDeclaration" is turned on, AntiSamy will automatically prepend the XML header to output. Enabling this feature will tell AntiSamy not to do that.

this feature is enabled, AntiSamy will automatically prepend the HTML doctype declaration. By default, AntiSamy will not prepend this header.

enabled, AntiSamy will automatically format the output according to some basic rules and indentation. Kind of like "pretty print."

100000

directive specifies the maximum size (in bytes) of user input before it's validated.

the developer chooses to allow CSS, this directive will specify whether or not remote style sheets found referenced in the user's input will be pulled down and embedded into the current user input.

1

feature allows developers to specify how many remote style sheets can be downloaded from any one input.

1000

"embedStyleSheets" is enabled, this timeout value (in milliseconds) will be used when fetching the offsite resource in question. This should be used to prevent validation threads from blocking when connecting to 3rd party systems that may purposefully act really, really slowly.

enabled, AntiSamy will keep HTML comments supplied in the input.

enabled, AntiSamy will append rel="nofollow" attributes to all anchor ( <a> ) tags supplied in the input. This is useful for telling search engines not to associate your site with sites that are under the control of your users

enabled, AntiSamy will treat attributes of <param> tags in the policy the same as any tags nested inside the <embed> This allows users to, according to policy, pass in data in either of those two methods with equal security. This is needed for sites that allow users to supply videos, etc.

enabled, this feature is intended to preserve spaces as specified in the input without normalization.

this directive is set to "encode," it will encode the tag using HTML entities, instead of removing the tag, which is the default behavior.

**Regular Expressions \[<common-regexps> </common-regexps>\]**

can declare regular expressions here that can be used in the rest of the Policy File. **:**

<regexp name="htmlId" value="\[a-zA-Z0-9\\:\\-\_\\.\]+"/>

regular expression is used to determine whether the text in an id attribute is valid or not.

0-9a-fA-F\]{6}|\[0-9a-fA-F\]{3}))"/>

can define any number of regular expressions and each regex has its unique name to refer to other sections for validating over regex. The regexes defined here can be used to

**Attributes \[<common-attributes> </common-attributes>\]**

you can declare attributes here that are common to many different tags. Antisamy will match the attribute that encountered on any tag with regexes / literal-list defined for that attribute in this section. If doesn’t match then Antisamy will apply the action defined for that attribute with the

Below the schema structure.

\="">

**:**

- \- The name of the attribute (required).
- \- Description of the attribute (optional ).
- \- Defines the action to be taken if the value of attribute fails matching (optional, Default : removeAttribute ) and possible actions are \[ removeAttribute, encodeTag, filterTag, removeTag \].
    - \- Remove the attribute only
    - \- Encode the tag in which the attribute constitute.
    - \- Remove the tag and children but keep the contents.
    - \- Remove the tag along with the content.

**\-list** - Value of the attribute should match all the regexp defined here.

- - \- The name of the regex that already defined in Common Regular Expressions.
    - \- Value of regex instead of defining int Common Regular Expressions.

**\-list** - The value of the attribute should be one of the literal constants defined here.

- - \- Defines the literal constant value of the attribute.

**Example 1:**

<attribute name="id" description="The 'id' of any HTML attribute should not contain anything besides letters and numbers">
   <regexp-list>
      <regexp name="htmlId"/>
   </regexp-list>
</attribute>

And sample html text as follows <body><p id='$$test'> Test Me </p></body> As id attribute contains $ it doesn’t match the regex htmlId so it will result as follows for different actions. removeAttribute -<body><p> Test Me </p></body> encodeTag - <body><p id="test"> Test Me </p></body> filterTag -<body> Test Me </body> removeTag -<body> </body>

**2:**

<attribute name="shape" description="The 'shape' attribute defines the shape of the selectable area"  onInvalid="encodeTag">
   <literal-list>
      <literal value="default"/>
      <literal value="rect"/>
      <literal value="circle"/>
      <literal value="poly"/>
   </literal-list>
</attribute>

the media attribute should match the regular expression and it should be in specified literal as well.

**:** order to apply these validations on an attribute of the given tag, the attribute should be declared in section OR in under section otherwise that attribute will be removed without applying the attribute validation that defined in common-attributes.

**Tag Attributes \[<global-tag-attributes> </global-tag-attributes>\]**

can declare attributes here that are global to all different tags. **:** <attribute name="id"/>

id attribute is global to many different tags.

**to Encode \[<tags-to-encode> </tags-to-encode>\]**

can declare tags here that will not be removed, filtered, validated or truncated, but encoded using HTML entities. **:** <tag>g</tag>

g tag doesn’t actually do anything, but it isn’t malicious either so we can encode it, rather than remove it.

**Rules \[<tag-rules> </tag-rules>\]**

can define parsing rules here that will be used for each tag individually. The following section shows what happens to tags according to what actions AntiSamy has decided to perform on it. This will help understand how to build your own tag-rules rules.

- \- Will remove entire tag when it encountered.
- \- Validate the tag attributes based on defined rules.
- \- Filter out the tag and children and preserve the content.
- \- Remove the content and children but keep the tag.

**:** when the tag is not listed in <tag-rules> Input:

<anewtag id="newtag" anewattrib="attrib">Text goes

Output: <div>Text goes <b>here</b>.</div>

**:** when the tag-rule action is set to “remove” for given tag. Tag is deleted with all of its child text. Input:

<anewtag id="newtag" anewattrib="attrib">Text goes

Output: <div></div>

**:** when the tag-rule action is set to “filter” for given tag. Delete tag, but keep its child text. Input:

<anewtag id="newtag" anewattrib="attrib">Text goes

Output: <div>Text goes <b>here</b>.</div>

**:** when the tag-rule action is set to “validate” for given tag. Verify that its attributes and children elements follow rules defined in policy file. Input:

<anewtag id="newtag" anewattrib="attrib">Text goes

Output:

<div><anewtag id="newtag">Text goes <b>here</b>.</anewtag></div>

**:** Behavior when the tag rule action is set to “truncate” for given tag. Keep the element, but remove all attributes. Input:

<div><anewtag id="newtag" anewattrib="attrib">Text goes <b>here</b>.</anewtag></div>

Output: <div><anewtag >Text goes <b>here</b>.</anewtag></div>

Example: <tag name="html" action="validate"/> The html tag is included in the clean output after it has been validated that it has been properly used.

**Rules \[<css-rules> </css-rules>\]**

can define parsing rules here that will be used for each CSS property individually. Only CSS defined in this section is allowed. **Example:**

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

CSS width property is allowed only when it matches these rules when used. The value of the width element must be a length, percentage or one of the two literal values “auto” or “inherit”.
