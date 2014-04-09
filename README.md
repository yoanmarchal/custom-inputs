# custom-inputs


Custom radio buttons and checkboxes

## Markup

### Checkboxes

``` html
  <ul class="checkboxes">
    <li>
      <input id="checkbox1" type="checkbox">
      <label for="checkbox2"></label>
    </li>
    <li>
      <input id="checkbox2" type="checkbox">
      <label for="checkbo2"></label>
    </li>    
  </ul>
```

### Radio Buttons

``` html
  <ul class="radio-buttons">
    <li>
      <input id="checkbox1" type="radio">
      <label for="checkbox1">Checkbox 1</label>
    </li>
    <li>
      <input id="radio2" type="radio">
      <label for="radio2">Checkbox 2</label>
    </li>
  </ul>
```


## Initialize

### Checkboxes

``` js
  <script>
    $('checkboxes').customInput('checkbox');
  </script>

```

### Radio Buttons

``` js
  <script>
    $('radio-buttons').customInput('radio');
  </script>
```