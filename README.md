# custom-inputs


Custom radio buttons and checkboxes

## Markup

Checkboxes:

```
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

Radio Buttons:

```
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


## Initialise


```
  <script>
    $('checkboxes').customInput('checkbox');
  </script>

```


```
  <script>
    $('radio-buttons').customInput('radio');
  </script>
```