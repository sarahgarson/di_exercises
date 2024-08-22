

const FormComponent = ({
  firstName,
  lastName,
  age,
  gender,
  destination,
  isNutsFree,
  isLactoseFree,
  isVegan,
}) => {
  return (
    <div>
      <h2>Entered Information:</h2>
      <p>Your name: {firstName} {lastName}</p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Your dietary restrictions:
        {isNutsFree && ' Nuts Free'}
        {isLactoseFree && ' Lactose Free'}
        {isVegan && ' Vegan'}
      </p>
    </div>
  );
};

export default FormComponent;
