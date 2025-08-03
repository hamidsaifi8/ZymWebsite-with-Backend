import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="relative z-20">
      <SecondaryHeading>Package chart</SecondaryHeading>
      <TertiaryHeading>Packages & Plans</TertiaryHeading>
      <p className="mx-auto max-w-[50ch] font-medium text-gray-300">
        CoreFit known for its best fitness program to give you strong and
        healthy body.
      </p>
    </div>
  );
}

export default Title;
