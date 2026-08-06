function calculateBMI(){
  const heightCm = parseFloat(document.getElementById('height').value);
  const weightKg = parseFloat(document.getElementById('weight').value);
  const resultBox = document.getElementById('result');

  if(!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0){
    alert('Enter a valid height and weight first.');
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  let category, color, note;
  if(bmi < 18.5){
    category = 'Underweight'; color = 'var(--under)';
    note = 'Below the typical range — consider speaking with a doctor about healthy weight gain.';
  } else if(bmi < 25){
    category = 'Normal'; color = 'var(--normal)';
    note = 'Within the typical healthy range for most adults.';
  } else if(bmi < 30){
    category = 'Overweight'; color = 'var(--over)';
    note = 'Above the typical range — small, sustainable changes can help bring this down.';
  } else {
    category = 'Obese'; color = 'var(--obese)';
    note = 'Well above the typical range — worth discussing with a healthcare provider.';
  }

  document.getElementById('bmiValue').textContent = bmiRounded;
  document.getElementById('bmiValue').style.color = color;
  const tag = document.getElementById('bmiTag');
  tag.textContent = category;
  tag.style.background = color;
  document.getElementById('note').textContent = note;

  // position the needle along a 15 -> 40 scale, clamped
  const min = 15, max = 40;
  const clamped = Math.min(Math.max(bmi, min), max);
  const pct = ((clamped - min) / (max - min)) * 100;
  document.getElementById('needle').style.left = pct + '%';

  resultBox.classList.add('show');
}

// allow Enter key to trigger calculation
document.getElementById('weight').addEventListener('keydown', function(e){
  if(e.key === 'Enter') calculateBMI();
});
document.getElementById('height').addEventListener('keydown', function(e){
  if(e.key === 'Enter') calculateBMI();
});