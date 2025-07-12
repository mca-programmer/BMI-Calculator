function toggleUnits() {
      const unit = document.getElementById("unit").value;
      document.getElementById("weight").placeholder = unit === "metric" ? "Enter weight in kg" : "Enter weight in lbs";
      document.getElementById("height").placeholder = unit === "metric" ? "Enter height in cm" : "Enter height in inches";
    }

    function calculateBMI() {
      const unit = document.getElementById("unit").value;
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);

      if (!weight || !height) {
        document.getElementById("result").innerText = "Please enter valid values.";
        return;
      }

      let bmi = 0;
      if (unit === "metric") {
        const heightMeters = height / 100;
        bmi = weight / (heightMeters * heightMeters);
      } else {
        bmi = (703 * weight) / (height * height);
      }

      bmi = bmi.toFixed(2);
      let category = "";

      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 24.9) category = "Normal weight";
      else if (bmi < 29.9) category = "Overweight";
      else category = "Obese";

      document.getElementById("result").innerText = `Your BMI is ${bmi} (${category}).`;
    }