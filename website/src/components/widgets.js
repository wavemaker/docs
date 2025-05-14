const React = require('react');
import { useColorMode } from '@docusaurus/theme-common';
const WidgetTabItems = ({ activePlatformsSet, links }) => {
  const widgetsData = [
    {
        "tab": "Data Widgets",
        "value": "dataWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/cards.svg",
                "darkIcon": "/learn/img/cardsDark.svg",
                "label": "Cards",
                "body": "Cards is a single unit of content or functionality, presented in a concise visual package, to easily update, maintain, and personalize content area. ",
                "overview": "/learn/app-development/widgets/datalive/cards/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Card.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/data-card--docs"
            },
            {
                "lightIcon": "/learn/img/datatable.svg",
                "darkIcon": "/learn/img/datatableDark.svg",
                "label": "Data Table",
                "body": " Data Table is a widget that presents a tabular view of data and allows actions. ",
                "overview": "/learn/app-development/widgets/datalive/data-table/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/LiveTable.html",
                "supportedPlatforms": ["web", "mobile"],
            },

            {
                "lightIcon": "/learn/img/form.svg",
                "darkIcon": "/learn/img/formDark.svg",
                "label": "Form ",
                "body": " Form is a group of input elements put together to post data, typically updating data through a web service call ",
                "overview": "/learn/app-development/widgets/datalive/form/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Form.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/data-form--docs"
            },
            {
                "lightIcon": "/learn/img/list.svg",
                "darkIcon": "/learn/img/listDark.svg",
                "label": "List",
                "body": " List is a widget that presents a list view of data, which contains a template for designing each list item ",
                "overview": "/learn/app-development/widgets/datalive/list/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/List.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/data-list--docs"
            },
            {
                "lightIcon": "/learn/img/livefilter.svg",
                "darkIcon": "/learn/img/livefilterDark.svg",
                "label": "Live Filter",
                "body": " Live Filter is a widget that allows user to filter the database results, usually used in combination with List or Data Table to display the filtered results ",
                "overview": "/learn/app-development/widgets/datalive/live-filter/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/LiveFilter.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/liveform.svg",
                "darkIcon": "/learn/img/liveformDark.svg",
                "label": "Live Form",
                "body": " Live Form is a group of input elements put together to submit data, typically resulting in creating or updating a database row ",
                "overview": "/learn/app-development/widgets/datalive/live-form/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/LiveForm.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/data-liveform--docs"
            }
        ]
    },
    {
        "tab": "Container Widgets",
        "value": "containerWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/accordian.svg",
                "darkIcon": "/learn/img/accordianDark.svg",
                "label": "Accordion",
                "body": " Accordion is a stacked list of UI components, with only one component expanded or viewed at any point in time, and the rest collapsed ",
                "overview": "/learn/app-development/widgets/container/accordion/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Accordion.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-accordion--docs"
            },
            {
                "lightIcon": "/learn/img/container.svg",
                "darkIcon": "/learn/img/containerDark.svg",
                "label": "Container",
                "body": " Container is an enclosing element that wraps the widgets placed within, mostly used for embedding partial pages ",
                "overview": "/learn/app-development/widgets/container/container/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Container.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-container--docs"
            },
            {
                "lightIcon": "/learn/img/grid.svg",
                "darkIcon": "/learn/img/gridDark.svg",
                "label": "Grid Layout",
                "body": " Grid Layout helps division of pages or content area into cells or grids based on the 12-column fluid grid system, which helps in proper placement of the widgets for responsive design. ",
                "overview": "/learn/app-development/widgets/container/grid-layout/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Layoutgrid.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-gridlayout--docs"
            },
            {
                "lightIcon": "/learn/img/panel.svg",
                "darkIcon": "/learn/img/panelDark.svg",
                "label": "Panel",
                "body": " Panel has designated sections such as header, body, and footer and can be used to group a set of widgets together. ",
                "overview": "/learn/app-development/widgets/container/panel/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Panel.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-panel--docs"
            },
            {
                "lightIcon": "/learn/img/tabs.svg",
                "darkIcon": "/learn/img/tabsDark.svg",
                "label": "Tabs",
                "body": " Tabs are Multiple UI components placed in a single window, with only one active component and headings allowing navigation to other components ",
                "overview": "/learn/app-development/widgets/container/tabs/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Tabs.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-tabs--docs"
            },
            {
                "lightIcon": "/learn/img/title.svg",
                "darkIcon": "/learn/img/titleDark.svg",
                "label": "Tile",
                "body": " Tile is a form of UI components to group a set of widgets together and to apply a uniform style to the content ",
                "overview": "/learn/app-development/widgets/container/tile/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Tile.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-tile--docs"
            },
            {
                "lightIcon": "/learn/img/wizard.svg",
                "darkIcon": "/learn/img/wizardDark.svg",
                "label": "Wizard",
                "body": " Wizard is a form of UI components to group a set of widgets together and to apply a uniform style to the content ",
                "overview": "/learn/app-development/widgets/container/wizard/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Wizard.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/containers-wizard--docs"
            }
        ]
    },
    {
        "tab": "Form Widgets",
        "value": "formWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/button.svg",
                "darkIcon": "/learn/img/buttonDark.svg",
                "label": "Button",
                "body": " Button is a control that can be clicked to perform an action. ",
                "overview": "/learn/app-development/widgets/form-widgets/button",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Button.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-button--docs"
            },
            {
                "lightIcon": "/learn/img/buttonGroup.svg",
                "darkIcon": "/learn/img/buttonGroupDark.svg",
                "label": "Button Group",
                "body": " Button Group is the arrangement of buttons grouped together. ",
                "overview": "/learn/app-development/widgets/form-widgets/button-group/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/ButtonGroup.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-buttongroup--docs"
            },
            {
                "lightIcon": "/learn/img/calender.svg",
                "darkIcon": "/learn/img/calenderDark.svg",
                "label": "Calendar",
                "body": " Calendar widget allows the user to select a date from the calendar displayed. ",
                "overview": "/learn/app-development/widgets/form-widgets/calendar/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Calendar.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-calendar--docs"
            },
            {
                "lightIcon": "/learn/img/checkBox.svg",
                "darkIcon": "/learn/img/checkBoxDark.svg",
                "label": "Checkbox",
                "body": " Checkbox allows the user to choose one or multiple of a predefined set of options. ",
                "overview": "/learn/app-development/widgets/form-widgets/checkbox/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Checkbox.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-checkbox--docs"
            },
            {
                "lightIcon": "/learn/img/checkBoxSet.svg",
                "darkIcon": "/learn/img/checkBoxSetDark.svg",
                "label": "CheckboxSet",
                "body": " CheckboxSet is the arrangement of checkbox widgets grouped together. ",
                "overview": "/learn/app-development/widgets/form-widgets/checkboxset/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Checkboxset.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-checkboxset--docs"
            },
            {
                "lightIcon": "/learn/img/chips.svg",
                "darkIcon": "/learn/img/chipsDark.svg",
                "label": "Chips",
                "body": " Chips allow user to search data and add, delete and edit the same. ",
                "overview": "/learn/app-development/widgets/form-widgets/chips/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Chips.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-chips--docs"
            },
            {
                "lightIcon": "/learn/img/colorPicker.svg",
                "darkIcon": "/learn/img/colorPickerDark.svg",
                "label": "Color Picker",
                "body": " Color Picker widget is to select the color and translate to a hex value. ",
                "overview": "/learn/app-development/widgets/form-widgets/color-picker/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/ColorPicker.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/currency.svg",
                "darkIcon": "/learn/img/currencyDark.svg",
                "label": "Currency",
                "body": " Currency is a special text widget to input the currency type data, with the display format based on the currency type. ",
                "overview": "/learn/app-development/widgets/form-widgets/currency/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Currency.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-currency--docs"
            },
            {
                "lightIcon": "/learn/img/date.svg",
                "darkIcon": "/learn/img/dateDark.svg",
                "label": "Date",
                "body": " Date widget helps to select a date from a calendar within the date range. ",
                "overview": "/learn/app-development/widgets/form-widgets/date-time-datetime/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Date.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-date--docs"
            },
            {
                "lightIcon": "/learn/img/dateTime.svg",
                "darkIcon": "/learn/img/dateTimeDark.svg",
                "label": "Datetime",
                "body": " Datetime is a composite widget of date and time widgets. ",
                "overview": "/learn/app-development/widgets/form-widgets/date-time-datetime/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Datetime.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-datetime--docs"
            },
            {
                "lightIcon": "/learn/img/fileUpload.svg",
                "darkIcon": "/learn/img/fileUploadDark.svg",
                "label": "FileUpload",
                "body": " FileUpload is a widget that pops up a file browsing window to select files and upload. ",
                "overview": "/learn/app-development/widgets/datalive/form/file-upload/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/FileUpload.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-fileupload--docs"
            },
            {
                "lightIcon": "/learn/img/number.svg",
                "darkIcon": "/learn/img/numberDark.svg",
                "label": "Number",
                "body": " Number allows input of a number. It works with the selected app Locale and displays the number localized format. ",
                "overview": "/learn/app-development/widgets/form-widgets/number/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Number.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-number--docs"
            },
            {
                "lightIcon": "/learn/img/radioset.svg",
                "darkIcon": "/learn/img/radiosetDark.svg",
                "label": "Radioset",
                "body": " Radioset is the arrangement of radio widgets grouped together. ",
                "overview": "/learn/app-development/widgets/form-widgets/radioset/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Radioset.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-radioset--docs"
            },
            {
                "lightIcon": "/learn/img/ratings.svg",
                "darkIcon": "/learn/img/ratingsDark.svg",
                "label": "Rating",
                "body": " Rating Widget allows users to input ratings as data. ",
                "overview": "/learn/app-development/widgets/form-widgets/rating-widget/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Rating.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-rating--docs"
            },
            {
                "lightIcon": "/learn/img/select.svg",
                "darkIcon": "/learn/img/selectDark.svg",
                "label": "Select",
                "body": " Select provides a drop-down list that with a list of items a user can select from. ",
                "overview": "/learn/app-development/widgets/form-widgets/select/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Select.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-select--docs"
            },
            {
                "lightIcon": "/learn/img/selectLocale.svg",
                "darkIcon": "/learn/img/selectLocaleDark.svg",
                "label": " Select Locale",
                "body": " Select Locale Widget is for Language selection from the list of support languages. ",
                "overview": "/learn/app-development/widgets/form-widgets/select-locale/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Select.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-selectlocale--docs"
            },
            {
                "lightIcon": "/learn/img/slider.svg",
                "darkIcon": "/learn/img/sliderDark.svg",
                "label": " Slider ",
                "body": " Slider is a widget control with a handle that can be moved right and left (horizontal slider) on a bar to select a value from within the range of allowed values. ",
                "overview": "/learn/app-development/widgets/form-widgets/slider/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Slider.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-slider--docs"
            },
            {
                "lightIcon": "/learn/img/switch.svg",
                "darkIcon": "/learn/img/switchDark.svg",
                "label": " Switch",
                "body": " Switch widget can help switching between 3 or more different options by pressing a single key. ",
                "overview": "/learn/app-development/widgets/form-widgets/switch/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Switch.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-switch--docs"
            },
            {
                "lightIcon": "/learn/img/text.svg",
                "darkIcon": "/learn/img/textDark.svg",
                "label": "Text",
                "body": " Text allows input of a single line of text. ",
                "overview": "/learn/app-development/widgets/form-widgets/text/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Text.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-text--docs"
            },
            {
                "lightIcon": "/learn/img/textArea.svg",
                "darkIcon": "/learn/img/textAreaDark.svg",
                "label": "Textarea",
                "body": " Textarea allows for multiple rows of data to be shown and entered. ",
                "overview": "/learn/app-development/widgets/form-widgets/textarea/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Textarea.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-textarea--docs"
            },
            {
                "lightIcon": "/learn/img/time.svg",
                "darkIcon": "/learn/img/timeDark.svg",
                "label": "Time",
                "body": " Time widget helps to select a time from within a specified time range. ",
                "overview": "/learn/app-development/widgets/form-widgets/date-time-datetime/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Time.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-time--docs"
            },
            {
                "lightIcon": "/learn/img/toggle.svg",
                "darkIcon": "/learn/img/toggleDark.svg",
                "label": " Toggle ",
                "body": " Toggle is a widget that can help switching between two different options by pressing a single key. ",
                "overview": "/learn/app-development/widgets/form-widgets/toggle/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Toggle.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/form-toggle--docs"
            }
        ]
    },
    {
        "tab": "Basic Widgets",
        "value": "basicWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/anchor.svg",
                "darkIcon": "/learn/img/anchorDark.svg",
                "label": "Anchor",
                "body": " Anchor is used as a navigation link within the app or an external URL. ",
                "overview": "/learn/app-development/widgets/basic/anchor/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Anchor.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-anchor--docs"
            },
            {
                "lightIcon": "/learn/img/audio.svg",
                "darkIcon": "/learn/img/audioDark.svg",
                "label": " Audio ",
                "body": " Audio widget is to embed an audio player into the project. ",
                "overview": "/learn/app-development/widgets/basic/audio",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Audio.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/html.svg",
                "darkIcon": "/learn/img/htmlDark.svg",
                "label": " HTML ",
                "body": " HTML is a widget to display HTML content or to render the text content using HTML. ",
                "overview": "/learn/app-development/widgets/datalive/form/html/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Html.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/icon.svg",
                "darkIcon": "/learn/img/iconDark.svg",
                "label": " Icon ",
                "body": " Icon widget is for displaying a comprehensible symbol or graphic. ",
                "overview": "/learn/app-development/widgets/basic/icon/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Icon.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-icon--docs"
            },
            {
                "lightIcon": "/learn/img/iframe.svg",
                "darkIcon": "/learn/img/iframeDark.svg",
                "label": " Iframe ",
                "body": " Iframe is a widget to display a web page content in a separate frame, without affecting the current page content or styles. ",
                "overview": "/learn/app-development/widgets/datalive/form/iframe/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Iframe.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/label.svg",
                "darkIcon": "/learn/img/labelDark.svg",
                "label": "Label ",
                "body": " Label is a uneditable text as a heading or to describe another widget. ",
                "overview": "/learn/app-development/widgets/basic/label/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Label.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-label--docs"
            },
            {
                "lightIcon": "/learn/img/message.svg",
                "darkIcon": "/learn/img/messageDark.svg",
                "label": " Message ",
                "body": " Message is a widget to display success, info, loading, error or warning messages to the user. ",
                "overview": "/learn/app-development/widgets/basic/message/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Message.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-message--docs"
            },
            {
                "lightIcon": "/learn/img/picture.svg",
                "darkIcon": "/learn/img/pictureDark.svg",
                "label": "Picture",
                "body": " Picture is a widget to display images in the project. ",
                "overview": "/learn/app-development/widgets/basic/picture",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Picture.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-picture--docs"
            },
            {
                "lightIcon": "/learn/img/progressBar.svg",
                "darkIcon": "/learn/img/progressBarDark.svg",
                "label": "Progress Bar",
                "body": " Progress Bar is an actual indicator of activity progress with time/percentage. ",
                "overview": "/learn/app-development/widgets/basic/progress-bar/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/ProgressBar.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/story/basic-progressbar--basic"
            },
            {
                "lightIcon": "/learn/img/richTextEditor.svg",
                "darkIcon": "/learn/img/richTextEditorDark.svg",
                "label": " Richtext Editor",
                "body": " Richtext Editor is an input control for formatted text content, optionally including media (WYSIWYG). ",
                "overview": "/learn/app-development/widgets/basic/richtext-editor/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/RichTextEditor.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/search.svg",
                "darkIcon": "/learn/img/searchDark.svg",
                "label": "Search",
                "body": " Search within a data source and give results. ",
                "overview": "/learn/app-development/widgets/basic/search/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Search.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-search--docs"
            },
            {
                "lightIcon": "/learn/img/spinner.svg",
                "darkIcon": "/learn/img/spinnerDark.svg",
                "label": " Spinner",
                "body": " Spinner is a widget for a visual indicator of activity in progress. ",
                "overview": "/learn/app-development/widgets/basic/spinner/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Spinner.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-spinner--docs"
            },
            {
                "lightIcon": "/learn/img/tree.svg",
                "darkIcon": "/learn/img/treeDark.svg",
                "label": " Tree",
                "body": " Tree widget can be used to display data in a hierarchical format. ",
                "overview": "/learn/app-development/widgets/basic/tree/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Tree.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/video.svg",
                "darkIcon": "/learn/img/videoDark.svg",
                "label": "Video",
                "body": " Video is a widget to embed a media player into the project. ",
                "overview": "/learn/app-development/widgets/basic/video",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Video.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/basic-video--docs"
            }
        ]
    },
    {
        "tab": "Chart Widgets",
        "value": "chartWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/line.svg",
                "darkIcon": "/learn/img/lineDark.svg",
                "label": "Line",
                "body": " Line chart displays information as a series of data points called \"markers\" connected by straight line segments. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-linechart--docs"
            },
            {
                "lightIcon": "/learn/img/column.svg",
                "darkIcon": "/learn/img/columnDark.svg",
                "label": "Column",
                "body": " Column charts display vertical bars going across the horizontal axis. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-columnschart--docs"
            },
            {
                "lightIcon": "/learn/img/area.svg",
                "darkIcon": "/learn/img/areaDark.svg",
                "label": "Area",
                "body": " Area chart is a line chart with the areas below the lines filled. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-areachart--docs"
            },
            {
                "lightIcon": "/learn/img/pie.svg",
                "darkIcon": "/learn/img/pieDark.svg",
                "label": "Pie",
                "body": " Pie chart is a type of graph in which a circle is divided into sectors that each represent a proportion of the whole. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-piechart--docs"
            },
            {
                "lightIcon": "/learn/img/bar.svg",
                "darkIcon": "/learn/img/barDark.svg",
                "label": "Bar",
                "body": " Bar chart presents grouped data with horizontal bars with lengths proportional to the values that they represent. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-barchart--docs"
            },
            {
                "lightIcon": "/learn/img/cumulative.svg",
                "darkIcon": "/learn/img/cumulativeDark.svg",
                "label": "Cumulative",
                "body": "  Cumulative Line is a line chart displays information as a series of data points, each data point is a cumulative sum of the data points of the preceding series. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/donut.svg",
                "darkIcon": "/learn/img/donutDark.svg",
                "label": "Donut",
                "body": " Donut is a type of graph in which a circle is divided into sectors that each represent a proportion of the whole, with an inner circle showing summary. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-donutchart--docs"
            },
            {
                "lightIcon": "/learn/img/bubble.svg",
                "darkIcon": "/learn/img/bubbleDark.svg",
                "label": "Bubble",
                "body": " Bubble chart is a type of chart that displays three dimensions of data. ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/charts-bubblechart--docs"
            }
        ]
    },
    {
        "tab": "Navigation Widgets",
        "value": "navigationWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/breadcrumb.svg",
                "darkIcon": "/learn/img/breadcrumbDark.svg",
                "label": "Breadcrumb",
                "body": " Breadcrumb is an indicator or nav link to the current page\"s location within the app\"s hierarchy. ",
                "overview": "/learn/app-development/widgets/navigation/breadcrumb/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Breadcrumb.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/dropdownMenu.svg",
                "darkIcon": "/learn/img/dropdownMenuDark.svg",
                "label": "Dropdown Menu",
                "body": " Dropdown Menu is a pull-down menu interface used for defining navigation structure within the app or for external links. ",
                "overview": "/learn/app-development/widgets/navigation/dropdown-menu/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Menu.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/navigation-menu--docs"
            },
            {
                "lightIcon": "/learn/img/nav.svg",
                "darkIcon": "/learn/img/navDark.svg",
                "label": "Nav",
                "body": " Nav widget represents navigation link or anchor, typically used for building navigation for multi-page apps. ",
                "overview": "/learn/app-development/widgets/navigation/nav/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Nav.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/navbar.svg",
                "darkIcon": "/learn/img/navbarDark.svg",
                "label": " Nav Bar ",
                "body": " Nav Bar is a grouping of nav widgets for navigation capabilities. ",
                "overview": "/learn/app-development/widgets/navigation/nav-bar/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Navbar.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/navigation-navbar--docs"
            },
            {
                "lightIcon": "/learn/img/popover.svg",
                "darkIcon": "/learn/img/popoverDark.svg",
                "label": " Popover ",
                "body": " Popover is a container-type graphical control element that opens in its parent window and blocks any other interaction until selected. ",
                "overview": "/learn/app-development/widgets/navigation/popover/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Popover.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/navigation-popover--docs"
            }
        ]
    },
    {
        "tab": "Advanced Widgets",
        "value": "advancedWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/carousel.svg",
                "darkIcon": "/learn/img/carouselDark.svg",
                "label": " Carousel",
                "body": " Carousel displays two or more items either images, text or any content, that transitions in a cyclic order. ",
                "overview": "/learn/app-development/widgets/advanced/carousel/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Carousel.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/advanced-carousel--docs"
            },
            {
                "lightIcon": "/learn/img/login.svg",
                "darkIcon": "/learn/img/loginDark.svg",
                "label": "Login",
                "body": " Login is used for taking credentials for authentication, embedded within a page. ",
                "overview": "/learn/app-development/widgets/advanced/login/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Login.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/advanced-login--docs"
            },
            {
                "lightIcon": "/learn/img/marquee.svg",
                "darkIcon": "/learn/img/marqueeDark.svg",
                "label": "Marquee",
                "body": " Marquee is a container to keep scrolling content. The scrolling can be in horizontal or in the vertical direction. ",
                "overview": "/learn/app-development/widgets/advanced/marquee/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Marquee.html",
                "supportedPlatforms": ["web", "mobile"],
            }
        ]
    },
    {
        "tab": "Modal Dialog/Dialog Widgets",
        "value": "dialogWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/alert.svg",
                "darkIcon": "/learn/img/alertDark.svg",
                "label": "Alert",
                "body": " Alert Dialog is a special dialog that is displayed when the user needs to take an immediate action. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/#alert-dialog",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Alertdialog.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/dialogs-alert--docs"
            },
            {
                "lightIcon": "/learn/img/confirm.svg",
                "darkIcon": "/learn/img/confirmDark.svg",
                "label": "Confirm",
                "body": " Confirm Dialog gives a special dialog box that is displayed which requires user’s consent to complete the action. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/#confirm-dialog",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Confirmdialog.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/dialogs-confirm--docs"
            },
            {
                "lightIcon": "/learn/img/design.svg",
                "darkIcon": "/learn/img/designDark.svg",
                "label": "Design",
                "body": " Design Dialog gives a small window that communicates information to the user and prompts them for a response. The content of the dialog is customizable. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/#design-dialog",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Designdialog.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/dialogs-design--docs"
            },
            {
                "lightIcon": "/learn/img/iframe_1.svg",
                "darkIcon": "/learn/img/iframe_1Dark.svg",
                "label": "Iframe",
                "body": " Iframe Dialog is a dialog box that loads an external webpage. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/#login-dialog",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/IFramedialog.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/page.svg",
                "darkIcon": "/learn/img/pageDark.svg",
                "label": "Page",
                "body": " Page Dialog is a dialog box that loads the partial page content. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/#page-dialog",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Pagedialog.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/login-green.svg",
                "darkIcon": "/learn/img/login-greenDark.svg",
                "label": " Login",
                "body": " Login Dialog is a dialog box that allows you to customize the login dialog. ",
                "overview": "/learn/app-development/widgets/modal-windows-dialogs/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Logindialog.html",
                "supportedPlatforms": ["web", "mobile"],
            }
        ]
    },
    {
        "tab": "Prefabs - Custom Widgets & Extensions",
        "value": "prefabWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/youtube.svg",
                "darkIcon": "/learn/img/youtubeDark.svg",
                "label": "",
                "body": " The YouTube prefab connects with YouTube and displays a video on the web page. ",
                "overview": "/learn/app-development/widgets/prefab/youtube/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/googleMaps.svg",
                "darkIcon": "/learn/img/googleMapsDark.svg",
                "label": "",
                "body": " The Googlemaps prefab connects with Google Maps and displays the map on your page. ",
                "overview": "/learn/app-development/widgets/prefab/googlemaps/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/googleMaps_1.svg",
                "darkIcon": "/learn/img/googleMaps_1Dark.svg",
                "label": "",
                "body": " This Prefab is no longer available from version 10 ",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/button.svg",
                "darkIcon": "/learn/img/button.svg",
                "label": "",
                "body": " QRCode prefab that ships with WaveMaker can be used to add any text or url to your app in the QRCode format. ",
                "overview": "/learn/app-development/widgets/prefab/qrcode/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/button.svg",
                "darkIcon": "/learn/img/button.svg",
                "label": "OAuth Prefabs",
                "body": "",
                "overview": "",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/box.svg",
                "darkIcon": "/learn/img/boxDark.svg",
                "label": "",
                "body": " Use this Prefab to enable user authorization using their Box credentials. ",
                "overview": "/learn/app-development/widgets/prefab/oauth-prefabs/box/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/facebook.svg",
                "darkIcon": "/learn/img/facebookDark.svg",
                "label": "",
                "body": " Use this Prefab to enable user authorization using their FaceBook credentials. ",
                "overview": "/learn/app-development/widgets/prefab/oauth-prefabs/facebook/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/button.svg",
                "darkIcon": "/learn/img/button.svg",
                "label": "",
                "body": " Use this Prefab to enable user authorization using their Google credentials. ",
                "overview": "/learn/app-development/widgets/prefab/oauth-prefabs/google/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/instagram.svg",
                "darkIcon": "/learn/img/instagramDark.svg",
                "label": "",
                "body": " Use this Prefab to enable user authorization using their Instagram credentials. ",
                "overview": "/learn/app-development/widgets/prefab/oauth-prefabs/instagram/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/linkedin.svg",
                "darkIcon": "/learn/img/linkedinDark.svg",
                "label": "",
                "body": " Use this Prefab to enable user authorization using their LinkedIn credentials. ",
                "overview": "/learn/app-development/widgets/prefab/oauth-prefabs/linkedin/",
                "api": "",
                "supportedPlatforms": ["web", "mobile"],
            }
        ]
    },
    {
        "tab": "Mobile & Device Widgets",
        "value": "mobileWidgets",
        "content": [
            {
                "lightIcon": "/learn/img/mediaList.svg",
                "darkIcon": "/learn/img/mediaListDark.svg",
                "label": " Media List ",
                "body": " Media List displays a list of pictures. The media can be displayed in a single-row mode or grid mode and can be opened to full screen by touching the media. ",
                "overview": "/learn/app-development/widgets/mobile-widgets/media-list/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/MediaList.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/segmentedControl.svg",
                "darkIcon": "/learn/img/segmentedControlDark.svg",
                "label": "Segmented Control",
                "body": " Segmented Control group of buttons to toggle Segmented Content containing the page content. ",
                "overview": "/learn/app-development/widgets/mobile-widgets/segmented-control/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/SegmentedControl.html",
                "supportedPlatforms": ["web", "mobile"],
            },
            {
                "lightIcon": "/learn/img/barcodeScanner.svg",
                "darkIcon": "/learn/img/barcodeScannerDark.svg",
                "label": "Barcode scanner",
                "body": " Barcode scanner can be used for scanning barcode. ",
                "overview": "/learn/app-development/widgets/mobile-widgets/barcode-scanner/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Barcodescanner.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/device-barcodescanner--docs"
            },
            {
                "lightIcon": "/learn/img/camera.svg",
                "darkIcon": "/learn/img/cameraDark.svg",
                "label": "Camera",
                "body": " Camera can be used to access the device camera for taking pictures and videos. ",
                "overview": "/learn/app-development/widgets/mobile-widgets/camera/",
                "api": "https://www.wavemakeronline.com/app-runtime/latest/docs/classes/Camera.html",
                "supportedPlatforms": ["web", "mobile"],
                "mobileStoryBook": "https://rn-components.onwavemaker.com/?path=/docs/device-camera--docs"
            }
        ]
    }
];

  let data = [];
  widgetsData.forEach((widget) => {
    const filteredContent = widget.content?.filter((item) => {
      const supportedPlatforms = item.supportedPlatforms || [];
      let hasCommonPlatform = false;
      supportedPlatforms.forEach((platform) => {
        if (activePlatformsSet.has(platform)) {
          hasCommonPlatform = true;
        }
        item[platform] = true; 
      });
      return hasCommonPlatform;
    });

    if (filteredContent?.length) {
      data.push(
        <>
          <h2 className="widget-header" key={widget.value}>{widget.tab}</h2>
          <Widgets content={filteredContent} links={links} />
        </>
      );
    }
  });

  return (<>{data}</>);
};

const Widgets = (props) => {
  const { colorMode } = useColorMode();
  let data = []
  for (let ind in props.content) {
    data.push(
      <div className="col padding-horiz-sm" key={ind}>
        <div className="card-content">
          <div className="card-header">
            <img src={colorMode != "dark" ? props.content[ind].lightIcon : props.content[ind].darkIcon} /><label>{props.content[ind].label}</label>
          <div style={{alignSelf: 'center', marginLeft: 'auto'}}>
          {props.content[ind]?.web && <img src={'/learn/img/webIcon.svg'} alt="Supports Web App" title="Supports Web App" style={{height:18, width:18, marginRight:4}}/>}
          {props.content[ind]?.mobile && <img src={'/learn/img/mobileIcon.svg'} alt="Supports Mobile App" title="Supports Mobile App" style={{height:18, width:18}}/>}
          </div>
          </div>
          <div className="card-body">{props.content[ind].body}</div>
          <div className="card-footer card_links">
            {props.links.showMobileStoryBookLink && props.content[ind]?.mobileStoryBook && <><a href={props.content[ind].mobileStoryBook} target='_blank'>Playground,</a>&nbsp;&nbsp;</>}
            {props.links.showApiLink && props.content[ind]?.api && <><a href={props.content[ind].api}>API Docs,</a>&nbsp;&nbsp;</>}
            <a href={props.content[ind].overview}>Overview</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="row card-group widget-cards">
      {data}
    </div>
  );
}

const WidgetTabs = (props) => {
  const platforms = props.show;
  const activePlatformsSet = new Set(platforms || []);
  const showMobileStoryBookLink = props.showMobileStoryBookLink;
  const showApiLink = props.showApiLink;
  return (
    <>
      <WidgetTabItems activePlatformsSet={activePlatformsSet} links={{showMobileStoryBookLink,showApiLink}}/>
    </>
  );
}
export default WidgetTabs;