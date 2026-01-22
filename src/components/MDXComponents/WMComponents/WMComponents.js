const React = require("react");
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import "./WMComponents.css";
import Link from "@docusaurus/Link";

const componentsData = [
    {
        tab: "Data Components",
        value: "dataWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/datatable.svg",
                darkIcon: "/img/component-icons/datatableDark.svg",
                label: "Data Table",
                body: "Data Table is a widget that presents a tabular view of data and allows actions.",
                supportedPlatforms: ["angular"],
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/data-table/"
            },
            {
                lightIcon: "/img/component-icons/form.svg",
                darkIcon: "/img/component-icons/formDark.svg",
                label: "Form",
                body: "Form is a group of input elements put together to post data, typically updating data through a web service call",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/data-form--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/data-form--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/form/"
            },
            {
                lightIcon: "/img/component-icons/list.svg",
                darkIcon: "/img/component-icons/listDark.svg",
                label: "List",
                body: "List is a widget that presents a list view of data, which contains a template for designing each list item",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/data-list--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/data-list--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/list/"
            },
            {
                lightIcon: "/img/component-icons/cards.svg",
                darkIcon: "/img/component-icons/cardsDark.svg",
                label: "Cards",
                body: "Cards is a single unit of content or functionality, presented in a concise visual package, to easily update, maintain, and personalize content area.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/data-card--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/data-card--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/cards/"
            },
            {
                lightIcon: "/img/component-icons/liveform.svg",
                darkIcon: "/img/component-icons/liveformDark.svg",
                label: "Live Form",
                body: "Live Form is a group of input elements put together to submit data, typically resulting in creating or updating a database row",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/data-liveform--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/data-liveform--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/live-form/"
            },
            {
                lightIcon: "/img/component-icons/livefilter.svg",
                darkIcon: "/img/component-icons/livefilterDark.svg",
                label: "Live Filter",
                body: "Live Filter is a widget that allows user to filter the database results, usually used in combination with List or Data Table to display the filtered results",
                supportedPlatforms: ["angular"],
                angularDocs: "/docs/user-interfaces/web/components/angular-components/datalive/live-filter/"
            }
        ]
    },
    {
        tab: "Container Components",
        value: "containerWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/accordian.svg",
                darkIcon: "/img/component-icons/accordianDark.svg",
                label: "Accordion",
                body: "Accordion is a stacked list of UI components, with only one component expanded or viewed at any point in time, and the rest collapsed",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-accordion--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/containers-accordion--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/accordion/"
            },
            {
                lightIcon: "/img/component-icons/container.svg",
                darkIcon: "/img/component-icons/containerDark.svg",
                label: "Container",
                body: "Container is an enclosing element that wraps the widgets placed within, mostly used for embedding partial pages",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-container--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/"
            },
            {
                lightIcon: "/img/component-icons/grid.svg",
                darkIcon: "/img/component-icons/gridDark.svg",
                label: "Grid Layout",
                body: "Grid Layout helps division of pages or content area into cells or grids based on the 12-column fluid grid system, which helps in proper placement of the widgets for responsive design.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-gridlayout--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/grid-layout/"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Flex Layout",
                body: "Flex Layout is a layout that arranges its children in a single column or row, either vertically or horizontally.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-linearlayout--docs"
            },
            {
                lightIcon: "/img/component-icons/panel.svg",
                darkIcon: "/img/component-icons/panelDark.svg",
                label: "Panel",
                body: "Panel has designated sections such as header, body, and footer and can be used to group a set of widgets together.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-panel--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/containers-panel--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/panel/"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Linear Layout",
                body: "Linear Layout is a layout that arranges its children in a single column or row, either vertically or horizontally.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/containers-linear-layout--docs"
            },
            {
                lightIcon: "/img/component-icons/tabs.svg",
                darkIcon: "/img/component-icons/tabsDark.svg",
                label: "Tabs",
                body: "Tabs are Multiple UI components placed in a single window, with only one active component and headings allowing navigation to other components",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-tabs--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/tabs/"
            },
            {
                lightIcon: "/img/component-icons/title.svg",
                darkIcon: "/img/component-icons/titleDark.svg",
                label: "Tile",
                body: "Tile is a form of UI components to group a set of widgets together and to apply a uniform style to the content",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-tile--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-tile--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/tile/"
            },
            {
                lightIcon: "/img/component-icons/wizard.svg",
                darkIcon: "/img/component-icons/wizardDark.svg",
                label: "Wizard",
                body: "Wizard is a form of UI components to group a set of widgets together and to apply a uniform style to the content",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/containers-wizard--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/container/wizard/"
            }
        ]
    },
    {
        tab: "Form Components",
        value: "formWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/button.svg",
                darkIcon: "/img/component-icons/buttonDark.svg",
                label: "Button",
                body: "Button is a control that can be clicked to perform an action.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-button--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-button--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/button"
            },
            {
                lightIcon: "/img/component-icons/buttonGroup.svg",
                darkIcon: "/img/component-icons/buttonGroupDark.svg",
                label: "Button Group",
                body: "Button Group is the arrangement of buttons grouped together.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-buttongroup--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/button-group/"
            },
            {
                lightIcon: "/img/component-icons/calender.svg",
                darkIcon: "/img/component-icons/calenderDark.svg",
                label: "Calendar",
                body: "Calendar widget allows the user to select a date from the calendar displayed.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-calendar--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-calendar--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/calendar/"
            },
            {
                lightIcon: "/img/component-icons/checkBox.svg",
                darkIcon: "/img/component-icons/checkBoxDark.svg",
                label: "Checkbox",
                body: "Checkbox allows the user to choose one or multiple of a predefined set of options.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-checkbox--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-checkbox--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/checkbox/"
            },
            {
                lightIcon: "/img/component-icons/checkBoxSet.svg",
                darkIcon: "/img/component-icons/checkBoxSetDark.svg",
                label: "CheckboxSet",
                body: "CheckboxSet is the arrangement of checkbox widgets grouped together.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-checkboxset--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-checkboxset--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/checkboxset/"
            },
            {
                lightIcon: "/img/component-icons/chips.svg",
                darkIcon: "/img/component-icons/chipsDark.svg",
                label: "Chips",
                body: "Chips allow user to search data and add, delete and edit the same.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-chips--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-chips--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/chips/"
            },
            {
                lightIcon: "/img/component-icons/colorPicker.svg",
                darkIcon: "/img/component-icons/colorPickerDark.svg",
                label: "Color Picker",
                body: "Color Picker widget is to select the color and translate to a hex value.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-colorpicker--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/color-picker/"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Composite",
                body: "Composite widget allows combining multiple input widgets into a single composite value.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-composite--docs"
            },
            {
                lightIcon: "/img/component-icons/currency.svg",
                darkIcon: "/img/component-icons/currencyDark.svg",
                label: "Currency",
                body: "Currency is a special text widget to input the currency type data, with the display format based on the currency type.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-currency--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-currency--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/currency/"
            },
            {
                lightIcon: "/img/component-icons/date.svg",
                darkIcon: "/img/component-icons/dateDark.svg",
                label: "Date",
                body: "Date widget helps to select a date from a calendar within the date range.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-date--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-date--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/date-time-datetime/"
            },
            {
                lightIcon: "/img/component-icons/dateTime.svg",
                darkIcon: "/img/component-icons/dateTimeDark.svg",
                label: "Datetime",
                body: "Datetime is a composite widget of date and time widgets.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-datetime--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-datetime--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/date-time-datetime/"
            },
            {
                lightIcon: "/img/component-icons/fileUpload.svg",
                darkIcon: "/img/component-icons/fileUploadDark.svg",
                label: "FileUpload",
                body: "FileUpload is a widget that pops up a file browsing window to select files and upload.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-fileupload--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-fileupload--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/file-upload"
            },
            {
                lightIcon: "/img/component-icons/number.svg",
                darkIcon: "/img/component-icons/numberDark.svg",
                label: "Number",
                body: "Number allows input of a number. It works with the selected app Locale and displays the number localized format.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-number--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-number--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/number/"
            },
            {
                lightIcon: "/img/component-icons/radioset.svg",
                darkIcon: "/img/component-icons/radiosetDark.svg",
                label: "Radioset",
                body: "Radioset is the arrangement of radio widgets grouped together.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-radioset--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-radioset--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/radioset/"
            },
            {
                lightIcon: "/img/component-icons/ratings.svg",
                darkIcon: "/img/component-icons/ratingsDark.svg",
                label: "Rating",
                body: "Rating Widget allows users to input ratings as data.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-rating--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-rating--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/rating-widget/"
            },
            {
                lightIcon: "/img/component-icons/select.svg",
                darkIcon: "/img/component-icons/selectDark.svg",
                label: "Select",
                body: "Select provides a drop-down list that with a list of items a user can select from.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-select--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-select--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/select/"
            },
            {
                lightIcon: "/img/component-icons/selectLocale.svg",
                darkIcon: "/img/component-icons/selectLocaleDark.svg",
                label: "Select Locale",
                body: "Select Locale Widget is for Language selection from the list of support languages.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-selectlocale--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/select-locale/"
            },
            {
                lightIcon: "/img/component-icons/slider.svg",
                darkIcon: "/img/component-icons/sliderDark.svg",
                label: "Slider",
                body: "Slider is a widget control with a handle that can be moved right and left (horizontal slider) on a bar to select a value from within the range of allowed values.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-slider--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-slider--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/slider/"
            },
            {
                lightIcon: "/img/component-icons/switch.svg",
                darkIcon: "/img/component-icons/switchDark.svg",
                label: "Switch",
                body: "Switch widget can help switching between 3 or more different options by pressing a single key.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-switch--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-switch--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/switch/"
            },
            {
                lightIcon: "/img/component-icons/text.svg",
                darkIcon: "/img/component-icons/textDark.svg",
                label: "Text",
                body: "Text allows input of a single line of text.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-text--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-text--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/text/"
            },
            {
                lightIcon: "/img/component-icons/textArea.svg",
                darkIcon: "/img/component-icons/textAreaDark.svg",
                label: "Textarea",
                body: "Textarea allows for multiple rows of data to be shown and entered.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-textarea--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-textarea--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/textarea/"
            },
            {
                lightIcon: "/img/component-icons/time.svg",
                darkIcon: "/img/component-icons/timeDark.svg",
                label: "Time",
                body: "Time widget helps to select a time from within a specified time range.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-time--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/input-time--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/date-time-datetime/"
            },
            {
                lightIcon: "/img/component-icons/toggle.svg",
                darkIcon: "/img/component-icons/toggleDark.svg",
                label: "Toggle",
                body: "Toggle is a widget that can help switching between two different options by pressing a single key.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/form-toggle--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/form-widgets/toggle/"
            }
        ]
    },
    {
        tab: "Basic Components",
        value: "basicWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/anchor.svg",
                darkIcon: "/img/component-icons/anchorDark.svg",
                label: "Anchor",
                body: "Anchor is used as a navigation link within the app or an external URL.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-anchor--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-anchor--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/anchor/"
            },
            {
                lightIcon: "/img/component-icons/audio.svg",
                darkIcon: "/img/component-icons/audioDark.svg",
                label: "Audio",
                body: "Audio widget is to embed an audio player into the project.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-audio--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/audio"
            },
            {
                lightIcon: "/img/component-icons/html.svg",
                darkIcon: "/img/component-icons/htmlDark.svg",
                label: "HTML",
                body: "HTML is a widget to display HTML content or to render the text content using HTML.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-html--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/html/"
            },
            {
                lightIcon: "/img/component-icons/icon.svg",
                darkIcon: "/img/component-icons/iconDark.svg",
                label: "Icon",
                body: "Icon widget is for displaying a comprehensible symbol or graphic.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-icon--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-icon--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/icon/"
            },
            {
                lightIcon: "/img/component-icons/iframe.svg",
                darkIcon: "/img/component-icons/iframeDark.svg",
                label: "Iframe",
                body: "Iframe is a widget to display a web page content in a separate frame, without affecting the current page content or styles.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-iframe--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/iframe/"
            },
            {
                lightIcon: "/img/component-icons/label.svg",
                darkIcon: "/img/component-icons/labelDark.svg",
                label: "Label",
                body: "Label is a uneditable text as a heading or to describe another widget.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-label--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-label--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/label/"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Lottie",
                body: "Lottie is a widget to display animations in the project.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-lottie--docs"
            },
            {
                lightIcon: "/img/component-icons/message.svg",
                darkIcon: "/img/component-icons/messageDark.svg",
                label: "Message",
                body: "Message is a widget to display success, info, loading, error or warning messages to the user.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-message--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-message--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/message/"
            },
            {
                lightIcon: "/img/component-icons/picture.svg",
                darkIcon: "/img/component-icons/pictureDark.svg",
                label: "Picture",
                body: "Picture is a widget to display images in the project.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-picture--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-picture--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/picture"
            },
            {
                lightIcon: "/img/component-icons/progressBar.svg",
                darkIcon: "/img/component-icons/progressBarDark.svg",
                label: "Progress Bar",
                body: "Progress Bar is an actual indicator of activity progress with time/percentage.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-progressbar--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-progressbar--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/progress-bar/"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Progress Circle",
                body: "Progress Circle is an actual indicator of activity progress with time/percentage.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-progresscircle--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-progresscircle--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/progress-circle/"
            },
            {
                lightIcon: "/img/component-icons/richTextEditor.svg",
                darkIcon: "/img/component-icons/richTextEditorDark.svg",
                label: "Richtext Editor",
                body: "Richtext Editor is an input control for formatted text content, optionally including media (WYSIWYG).",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-richtexteditor--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/richtext-editor/"
            },
            {
                lightIcon: "/img/component-icons/search.svg",
                darkIcon: "/img/component-icons/searchDark.svg",
                label: "Search",
                body: "Search within a data source and give results.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-search--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-search--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/search/"
            },
            {
                lightIcon: "/img/component-icons/spinner.svg",
                darkIcon: "/img/component-icons/spinnerDark.svg",
                label: "Spinner",
                body: "Spinner is a widget for a visual indicator of activity in progress.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-spinner--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-spinner--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/spinner/"
            },
            {
                lightIcon: "/img/component-icons/tree.svg",
                darkIcon: "/img/component-icons/treeDark.svg",
                label: "Tree",
                body: "Tree widget can be used to display data in a hierarchical format.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-tree--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/tree/"
            },
            {
                lightIcon: "/img/component-icons/video.svg",
                darkIcon: "/img/component-icons/videoDark.svg",
                label: "Video",
                body: "Video is a widget to embed a media player into the project.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-video--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/basic-video--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/basic/video"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Webview",
                body: "Webview is a widget to display a web page content in a page.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-webview--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Tooltip",
                body: "Tooltip is a message that appears when a user hovers over, clicks on, or taps an element.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/basic-tooltip--docs"
            }
        ]
    },
    {
        tab: "Chart Components",
        value: "chartWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/line.svg",
                darkIcon: "/img/component-icons/lineDark.svg",
                label: "Line",
                body: "Line chart displays information as a series of data points called 'markers' connected by straight line segments.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-linechart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/column.svg",
                darkIcon: "/img/component-icons/columnDark.svg",
                label: "Column",
                body: "Column charts display vertical bars going across the horizontal axis.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-columnschart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-bar-column-chart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/area.svg",
                darkIcon: "/img/component-icons/areaDark.svg",
                label: "Area",
                body: "Area chart is a line chart with the areas below the lines filled.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-areachart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-line-area-chart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/pie.svg",
                darkIcon: "/img/component-icons/pieDark.svg",
                label: "Pie",
                body: "Pie chart is a type of graph in which a circle is divided into sectors that each represent a proportion of the whole.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-piechart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-pie-donut-chart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/bar.svg",
                darkIcon: "/img/component-icons/barDark.svg",
                label: "Bar",
                body: "Bar chart presents grouped data with horizontal bars with lengths proportional to the values that they represent.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-barchart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-bar-column-chart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/cumulative.svg",
                darkIcon: "/img/component-icons/cumulativeDark.svg",
                label: "Cumulative",
                body: " Cumulative Line is a line chart displays information as a series of data points, each data point is a cumulative sum of the data points of the preceding series.",
                supportedPlatforms: ["angular"],
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/donut.svg",
                darkIcon: "/img/component-icons/donutDark.svg",
                label: "Donut",
                body: "Donut is a type of graph in which a circle is divided into sectors that each represent a proportion of the whole, with an inner circle showing summary.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-donutchart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-pie-donut-chart--docs",
                angularDocs: ""
            },
            {
                lightIcon: "/img/component-icons/bubble.svg",
                darkIcon: "/img/component-icons/bubbleDark.svg",
                label: "Bubble",
                body: "Bubble chart is a type of chart that displays three dimensions of data.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/charts-bubblechart--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/charts-bubble-chart--docs",
                angularDocs: ""
            }
        ]
    },
    {
        tab: "Layout Components",
        value: "layoutWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Footer",
                body: "Footer is a layout component that provides a footer section for the application.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/layout-footer--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Header",
                body: "Header is a layout component that provides a header section for the application.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/layout-header--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "LeftNav",
                body: "LeftNav is a layout component that provides a left navigation panel for the application.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/layout-leftnav--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "RightNav",
                body: "RightNav is a layout component that provides a right navigation panel for the application.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/layout-rightnav--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "TopNav",
                body: "TopNav is a layout component that provides a top navigation bar for the application.",
                supportedPlatforms: ["react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/layout-topnav--docs"
            }
        ]
    },
    {
        tab: "Navigation Components",
        value: "navigationWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/breadcrumb.svg",
                darkIcon: "/img/component-icons/breadcrumbDark.svg",
                label: "Breadcrumb",
                body: "Breadcrumb is an indicator or nav link to the current page's location within the app's hierarchy.",
                supportedPlatforms: ["angular"],
                angularDocs: "/docs/user-interfaces/web/components/angular-components/navigation/breadcrumb/"
            },
            {
                lightIcon: "/img/component-icons/dropdownMenu.svg",
                darkIcon: "/img/component-icons/dropdownMenuDark.svg",
                label: "Dropdown Menu",
                body: "Dropdown Menu is a pull-down menu interface used for defining navigation structure within the app or for external links.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/navigation-menu--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/navigation-menu--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/navigation/dropdown-menu/"
            },
            {
                lightIcon: "/img/component-icons/nav.svg",
                darkIcon: "/img/component-icons/navDark.svg",
                label: "Nav",
                body: "Nav widget represents navigation link or anchor, typically used for building navigation for multi-page apps.",
                supportedPlatforms: ["angular"],
                angularDocs: "/docs/user-interfaces/web/components/angular-components/navigation/nav/"
            },
            {
                lightIcon: "/img/component-icons/navbar.svg",
                darkIcon: "/img/component-icons/navbarDark.svg",
                label: "Nav Bar",
                body: "Nav Bar is a grouping of nav widgets for navigation capabilities.",
                supportedPlatforms: ["angular", "rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/navigation-navbar--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/navigation/nav-bar/"
            },
            {
                lightIcon: "/img/component-icons/popover.svg",
                darkIcon: "/img/component-icons/popoverDark.svg",
                label: "Popover",
                body: "Popover is a container-type graphical control element that opens in its parent window and blocks any other interaction until selected.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/navigation-popover--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/navigation-popover--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/navigation/popover/"
            }
        ]
    },
    {
        tab: "Advanced Components",
        value: "advancedWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/carousel.svg",
                darkIcon: "/img/component-icons/carouselDark.svg",
                label: "Carousel",
                body: "Carousel displays two or more items either images, text or any content, that transitions in a cyclic order.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/advanced-carousel--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/advanced-carousel--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/advanced/carousel/"
            },
            {
                lightIcon: "/img/component-icons/login.svg",
                darkIcon: "/img/component-icons/loginDark.svg",
                label: "Login",
                body: "Login is used for taking credentials for authentication, embedded within a page.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/advanced-login--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/advanced-login--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/advanced/login/"
            },
            {
                lightIcon: "/img/component-icons/marquee.svg",
                darkIcon: "/img/component-icons/marqueeDark.svg",
                label: "Marquee",
                body: "Marquee is a container to keep scrolling content. The scrolling can be in horizontal or in the vertical direction.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/advanced-marquee--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/advanced/marquee/"
            }
        ]
    },
    {
        tab: "Modal Dialog/Dialog Components",
        value: "dialogWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/alert.svg",
                darkIcon: "/img/component-icons/alertDark.svg",
                label: "Alert",
                body: "Alert Dialog is a special dialog that is displayed when the user needs to take an immediate action.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/dialogs-alert--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-alert-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/#alert-dialog"
            },
            {
                lightIcon: "/img/component-icons/confirm.svg",
                darkIcon: "/img/component-icons/confirmDark.svg",
                label: "Confirm",
                body: "Confirm Dialog gives a special dialog box that is displayed which requires user’s consent to complete the action.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/dialogs-confirm--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-confirm-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/#confirm-dialog"
            },
            {
                lightIcon: "/img/component-icons/design.svg",
                darkIcon: "/img/component-icons/designDark.svg",
                label: "Design",
                body: "Design Dialog gives a small window that communicates information to the user and prompts them for a response. The content of the dialog is customizable.",
                supportedPlatforms: ["angular", "rn", "react"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/dialogs-design--docs",
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/#design-dialog"
            },
            {
                lightIcon: "/img/component-icons/iframe_1.svg",
                darkIcon: "/img/component-icons/iframe_1Dark.svg",
                label: "Iframe",
                body: "Iframe Dialog is a dialog box that loads an external webpage.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-iframe-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/#login-dialog"
            },
            {
                lightIcon: "/img/component-icons/page.svg",
                darkIcon: "/img/component-icons/pageDark.svg",
                label: "Page",
                body: "Page Dialog is a dialog box that loads the partial page content.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-page-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/#page-dialog"
            },
            {
                lightIcon: "/img/component-icons/login-green.svg",
                darkIcon: "/img/component-icons/login-greenDark.svg",
                label: "Login",
                body: "Login Dialog is a dialog box that allows you to customize the login dialog.",
                supportedPlatforms: ["angular", "react"],
                reactStorybook: "https://react-components.wavemaker.com/?path=/story/dialogs-login-dialog--docs",
                angularDocs: "/docs/user-interfaces/web/components/angular-components/modal-windows-dialogs/"
            }
        ]
    },
    // {
    //     tab: "Prefabs - Custom Components & Extensions",
    //     value: "prefabWidgets",
    //     content: [
    //         {
    //             lightIcon: "/img/component-icons/youtube.svg",
    //             darkIcon: "/img/component-icons/youtubeDark.svg",
    //             label: "",
    //             body: "The YouTube prefab connects with YouTube and displays a video on the web page.",
    //             supportedPlatforms: ["angular"],
    //             angularDocs: "/docs/user-interfaces/web/components/angular-components/prefab/youtube/"
    //         },
    //         {
    //             lightIcon: "/img/component-icons/googleMaps.svg",
    //             darkIcon: "/img/component-icons/googleMapsDark.svg",
    //             label: "",
    //             body: "The Googlemaps prefab connects with Google Maps and displays the map on your page.",
    //             supportedPlatforms: ["angular"],
    //             angularDocs: "/docs/user-interfaces/web/components/angular-components/prefab/googlemaps/"
    //         },
    //         {
    //             lightIcon: "/img/component-icons/googleMaps_1.svg",
    //             darkIcon: "/img/component-icons/googleMaps_1Dark.svg",
    //             label: "",
    //             body: "This Prefab is no longer available from version 10",
    //             supportedPlatforms: ["angular"],
    //             angularDocs: ""
    //         },
    //         {
    //             lightIcon: "/img/component-icons/button.svg",
    //             darkIcon: "/img/component-icons/bottomSheet.svg",
    //             label: "",
    //             body: "QRCode prefab that ships with WaveMaker can be used to add any text or url to your app in the QRCode format.",
    //             supportedPlatforms: ["angular"],
    //             angularDocs: "/docs/user-interfaces/web/components/angular-components/prefab/qrcode/"
    //         },

    //     ]
    // },
    {
        tab: "Mobile & Device Components",
        value: "mobileWidgets",
        content: [
            {
                lightIcon: "/img/component-icons/barcodeScanner.svg",
                darkIcon: "/img/component-icons/barcodeScannerDark.svg",
                label: "Barcode scanner",
                body: "Barcode scanner can be used for scanning barcode.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/device-barcodescanner--docs"
            },
            {
                lightIcon: "/img/component-icons/camera.svg",
                darkIcon: "/img/component-icons/cameraDark.svg",
                label: "Camera",
                body: "Camera can be used to access the device camera for taking pictures and videos.",
                supportedPlatforms: ["rn"],
                rnStorybook: "https://reactnative-components.wavemaker.com/?path=/docs/device-camera--docs"
            },
            {
                lightIcon: "/img/component-icons/bottomSheet.svg",
                darkIcon: "/img/component-icons/bottomSheet.svg",
                label: "Bottom Sheet",
                body: "Bottom Sheet displays a sliding panel from the bottom for extra content or actions.",
                supportedPlatforms: ["rn"],
                rnStorybook: ""
            }
        ]
    }
];

const ComponentCategories = ({ show }) => {

    let data = [];
    componentsData.forEach((componentCategory) => {
        const filteredComponents = componentCategory.content?.filter((item) => {
            return item.supportedPlatforms?.includes(show);
        });
        if (filteredComponents?.length) {
            data.push(
                <React.Fragment key={componentCategory.value}>
                    <h2 className="widget-header">{componentCategory.tab}</h2>
                    <ComponentCards components={filteredComponents} show={show} />
                </React.Fragment>
            );
        }
    });
    return (<>{data}</>);
};

const ComponentCards = ({ components, show }) => {
    const { colorMode } = useColorMode();
    let data = []
    for (let ind in components) {
        data.push(
            <Link className="col padding-horiz-sm" key={ind} to={show === "react" ? components[ind].reactStorybook : show === "angular" ? components[ind].angularDocs : show === "rn" ? components[ind].rnStorybook : ""}>
                    <div className="card-content">
                        <div className="card-header">
                            <div style={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
                                <img src={useBaseUrl(colorMode != "dark" ? components[ind].lightIcon : components[ind].darkIcon)} /><label>{components[ind].label}</label>
                            </div>
                        </div>
                        <div className="card-body">{components[ind].body}</div>
                    </div>
            </Link>
        );
    }
    return (
        <div className="row card-group widget-cards">
            {data}
        </div>
    );
}

const WMComponents = ({ show }) => {

    return (
        <>
            <ComponentCategories show={show} />
        </>
    );
}
export default WMComponents;