# SegerstromSubPage Exercise

### Bootstrap

Page is built with bootstrap, mostly containers, col, row, font size, and accordian

### Gulp

Use of gulpfile.js to compile the scss into css. index.scss -> -css/styles.css

### Legacy

indexOLD.html and indexOLD.scss left in project as guide and example of first runthrough on site. Older revision of script.js no longer exists.

### Assets

All img assets are just dropped in the assets folder, no further sorting here.

### Javascript

The accordian function in this file was provided to me from Matt after a jsfiddle walkthrough.

### Comments

I left comments throughout the project, they don't describe detail but do describe or single out components and sections for the project.

## Incomplete

### Nav

Navbar has a responsive issue where when in smaller/est view the nav icons group in a unwanted way.

### ~~Accordian~~

~~script.js has an animation for the expanding of the accordian however I am unsure if it actually animates. I see little difference when that part of the code is commented out.~~

### Footer / ASL

No color for the footer map pin and asl img (both appear gray) and not orange and purple (respectively) when giving the img a color overlay it just applies an overlay to the element and looked goofy as it was just a square of transparent color.

### ~~Overflow / Scrollbars~~

~~The following code is live but not seeming to work when hosted on github.~~

```
// HTML
html {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
  overflow-x: hidden;
}

html::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
// End HTML
```

## Code Review Notes

- [x] `row-md` and `row-sm` are not valid bootstrap classes

- [x] jquery script reference before bootstrap script reference

```
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

    <script src="script.js"></script>
```

- [x] So in the following order: jquery script, bootstrap script, and personal script

- [x] footer img and content z-index

_Corrections made to all items in Code Review Notes_
