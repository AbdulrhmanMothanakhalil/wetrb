document.getElementById('calorie-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateCalories, 200);

  e.preventDefault();
});

function calculateCalories(e) {
  
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name="customRadioInline1"]:checked');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const activity = document.getElementById('list').value;
  const totalCalories = document.getElementById('total-calories');
  
  
  if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
    errorMessage('Please make sure the values you entered are correct')
  } else if(gender.id === 'male' && activity === "1") {
    totalCalories.value = 1.2 * (66.5 + (13.75 * parseInt(weight.value)) + (5.03 * parseInt(height.value)) - (6.755 * parseInt(age.value)));
  } else if(gender.id === 'male' && activity === "2") {
    totalCalories.value = 1.375 * (66.5 + (13.75 * parseInt(weight.value)) + (5.03 * parseInt(height.value)) - (6.755 * parseInt(age.value)));
  } else if (gender.id === 'male' && activity === "3") {
    totalCalories.value = 1.55 * (66.5 + (13.75 * parseInt(weight.value)) + (5.03 * parseInt(height.value)) - (6.755 * parseInt(age.value)));
  } else if(gender.id === 'male' && activity === "4") {
    totalCalories.value = 1.725 * (66.5 + (13.75 * parseInt(weight.value)) + (5.03 * parseInt(height.value)) - (6.755 * parseInt(age.value)));
  } else if(gender.id === 'male' && activity === "5") {
    totalCalories.value = 1.9 * (66.5 + (13.75 * parseInt(weight.value)) + (5.03 * parseInt(height.value)) - (6.755 * parseInt(age.value)))
    ;
  } else if(gender.id === 'female' && activity === "1") {
    totalCalories.value = 1.2 * (655 + (9.563 * parseInt(weight.value)) + (1.850 * parseInt(height.value)) - (4.676 * parseInt(age.value)));
  } else if(gender.id === 'female' && activity === "2") {
    totalCalories.value = 1.375 * (655 + (9.563 * parseInt(weight.value)) + (1.850 * parseInt(height.value)) - (4.676 * parseInt(age.value)));
  } else if(gender.id === 'female' && activity === "3") {
    totalCalories.value = 1.55 * (655 + (9.563 * parseInt(weight.value)) + (1.850 * parseInt(height.value)) - (4.676 * parseInt(age.value)));
  } else if(gender.id === 'female' && activity === "4") {
    totalCalories.value = 1.725* (655 + (9.563 * parseInt(weight.value)) + (1.850 * parseInt(height.value)) - (4.676 * parseInt(age.value)));
  } else {
    totalCalories.value = 1.9 * (655 + (9.563 * parseInt(weight.value)) + (1.850 * parseInt(height)) - (4.676 * parseInt(age.value)));
  } 

  
  document.getElementById('results').style.display = 'block';
  

  document.getElementById('loading').style.display = 'none';
}

function errorMessage(error) {
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 400);
}

function clearError() {
  document.querySelector('.alert').remove();
}

