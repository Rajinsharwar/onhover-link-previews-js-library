# OnHover Link Previews

## Description

OnHover Link Preview is a lightweight JavaScript library (< 885 Bytes when loaded using CDN) that allows you to display image previews of links when hovered over. It's designed to be easy to use and highly customizable. The preview is fetched using the WordPress.com MShots service.

<img width="587" alt="screenshot-1" src="https://github.com/Rajinsharwar/onhover-link-previews-js-library/assets/68213636/e429402d-436a-47d7-a8a9-455aa3598437">

## Installation

You can install the package from npm using the following command:

```bash
npm install onhover-link-previews
```

## Usage

To use OnHover Link Preview JS Library, follow these steps:

### 1. Include the library in your project:

```html
<script src="https://cdn.jsdelivr.net/npm/onhover-link-previews/index.min.js"></script>
```

### 2. Add the "onhover-link-preview" class to the links you want to enable the preview for:

```html
<a href="https://example.com" class="onhover-link-preview"
  >Hover me for a preview!</a
>
```

### 3. Customize the preview image by adding width and height classes to the links:

```html
<a href="https://example.com" class="onhover-link-preview olp-w-400 olp-h-300"
  >Custom-sized preview</a
>
```

You can set custom width and height for the preview image by adding width and height classes to the links. The library looks for classes in the format olp-w-{width} and olp-h-{height}, where {width} and {height} are numeric values. By default, if the classes are not present, the values of the width, and height are 300, and 200 respectively.

### 4. Styling

You can customize the styling of the preview box using CSS by applying styling to the ( .on-hover-link-prev ) div class. The default styles include:

```css
position: absolute;
top: 30px;
left: 8px;
background-color: rgb(255, 255, 255);
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
z-index: 9999;
max-width: 50%;
```

So, if you want to edit these default values for the ..on-hover-link-prev class, be sure to use the "!important". Other than these, you can add any other design to the preview box by selecting the class name.

Example:

```css
.on-hover-link-prev {
  background-color: #f2f2f2 !important;
  padding: 15px !important;
  margin-right: 30px; //Will make the look awkward, but it's an example anyway :)
}
```

### MShots Service

Please note that OnHover Link Preview relies on the external MShots service provided by Automattic. MShots (https://github.com/Automattic/mShots) is licensed under GPL2. For information regarding the privacy policy of Automattic, please refer to the [official website](https://automattic.com/privacy/)

## License

This library is licensed under the MIT License. See the LICENSE file for details.
