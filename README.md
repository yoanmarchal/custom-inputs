custom-inputs
=============

Custom radio buttons and checkboxes

Markup

Checkboxes:
<code>

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

</code>

Radio Buttons:
<code>

  <ul class="radio-buttons">
    <li>
      <input id="checkbox1" type="radio">
      <label for="checkbox1"></label>
    </li>
    <li>
      <input id="radio2" type="radio">
      <label for="radio2"></label>
    </li>
  </ul>

</code>


Initialise

<code>
  $('checkboxes').customInput('checkbox');
</code>

<code>
  $('radio-buttons').customInput('radio');
</code>
